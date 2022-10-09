import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
// Services
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
// Types
import { User } from 'src/app/shared/types/user.type';
// Constants
import { TASKS_ROUTER_LINKS } from 'src/app/shared/constants/router-link.constants';
import { REGISTER_TEMPLATE_TEXT } from '../../constants/template.constants';

@Component({
	selector: 'register-form',
	templateUrl: './register-form.component.html',
	styleUrls: ['./register-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent {
	public TEMPLATE_TEXT = REGISTER_TEMPLATE_TEXT;

	public form = new FormGroup({
		username: new FormControl('', [
			Validators.required, Validators.minLength(3), Validators.maxLength(9)
		]),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(16)]),
		repeatPassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(16)])
	});

	constructor(
		private router: Router,
		private authService: AuthService,
		private loadingService: LoadingService,
		private notificationService: NotificationService
	) {}

	public register(): void {
		this.loadingService.startLoad();
		this.authService.register(this.form.value as User)
			.pipe(take(1))
			.subscribe(response => {
				this.loadingService.stopLoad();
				this.notificationService.openSnackBar(response.message || '');
				if (response.status) {
					this.router.navigate([TASKS_ROUTER_LINKS.tasksList]);
				}
			}, error => {
				this.loadingService.stopLoad();
				console.error(error);
			});
	}
}
