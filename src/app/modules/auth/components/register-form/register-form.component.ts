import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
// Services
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
// Types
import { User } from 'src/app/shared/types/user.type';
import { IValidate } from 'src/app/shared/types/validate.type';
// Constants
import { REGISTER_TEMPLATE_TEXT } from '../../constants/template.constants';
import { TASKS_ROUTER_LINKS } from 'src/app/shared/constants/router-link.constants';

@Component({
	selector: 'register-form',
	templateUrl: './register-form.component.html',
	styleUrls: ['./register-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent {
	public TEMPLATE_TEXT = REGISTER_TEMPLATE_TEXT;

	public form: FormGroup;

	constructor(
		private router: Router,
		private authService: AuthService,
		private loadingService: LoadingService,
		private notificationService: NotificationService
	) {
		this.form = new FormGroup({
			username: new FormControl('', [
				Validators.required, Validators.minLength(3), Validators.maxLength(9)
			]),
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(16)]),
			repeatPassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(16)])
		}, { validators: this.checkPasswords });
	}

	public register(): void {
		this.loadingService.startLoad();
		this.authService.register(this.form.value as User)
			.pipe(take(1))
			.subscribe({
				next: res => {
					this.loadingService.stopLoad();
					this.notificationService.openSnackBar((res as IValidate).message);if ((res as IValidate).status) {
						this.authService.isAuth$.next(true);
						this.router.navigate([TASKS_ROUTER_LINKS.tasksList]);
					}
				},
				error: () => {
					this.loadingService.stopLoad();
				}
			});
	}

	private checkPasswords: ValidatorFn = (form: AbstractControl):  ValidationErrors | null => {
		const pass = form.get('password')?.value;
		const confirmPass = form.get('repeatPassword')?.value;
		return pass === confirmPass ? null : { notSame: true };
	};
}
