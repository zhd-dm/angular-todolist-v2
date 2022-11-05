import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
// Services
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
// Types
import { LoginUserForm, UserForLogin } from '../../config/types/forms.types';
import { IValidate } from 'src/app/shared/types/validate.type';
// Constants
import { LOGIN_TEMPLATE_TEXT } from '../../config/constants/template.constants';
import { TASKS_ROUTER_LINKS } from 'src/app/shared/constants/router-link.constants';
// Utils
import { buildLoginForm } from '../../config/utils/build-forms';

@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
	public TEMPLATE_TEXT = LOGIN_TEMPLATE_TEXT;

	public form: FormGroup<LoginUserForm>;

	constructor(
		private router: Router,
		private authService: AuthService,
		private loadingService: LoadingService,
		private notificationService: NotificationService
	) {
		this.form = buildLoginForm(null);
	}

	public logIn(): void {
		this.authService.logIn(this.form.value as UserForLogin)
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
