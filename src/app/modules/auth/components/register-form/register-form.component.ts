import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
// Services
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
// Types
import { RegisterUserForm, UserForRegisterForm } from '../../config/types/forms.types';
import { IValidate } from 'src/app/shared/types/validate.type';
// Constants
import { REGISTER_TEMPLATE_TEXT } from '../../config/constants/template.constants';
import { TASKS_ROUTER_LINKS } from 'src/app/shared/constants/router-link.constants';
// Utils
import { buildRegisterForm } from '../../config/utils/build-forms';

@Component({
	selector: 'register-form',
	templateUrl: './register-form.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent {
	public TEMPLATE_TEXT = REGISTER_TEMPLATE_TEXT;

	public form: FormGroup<RegisterUserForm>;

	constructor(
		private router: Router,
		private authService: AuthService,
		private loadingService: LoadingService,
		private notificationService: NotificationService
	) {
		this.form = buildRegisterForm(null);
	}

	public register(): void {
		this.loadingService.startLoad();
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { repeatPassword, ...user } = this.form.value as UserForRegisterForm;
		this.authService.register(user)
			.pipe(take(1))
			.subscribe({
				next: res => {
					this.loadingService.stopLoad();
					this.notificationService.openSnackBar((res as IValidate).message);
					if ((res as IValidate).status) {
						this.authService.isAuth$.next(true);
						this.router.navigate([TASKS_ROUTER_LINKS.tasksList]);
					}
				},
				error: () => {
					this.loadingService.stopLoad();
				}
			});
	}
}
