import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Services
import { AuthService } from 'src/app/shared/services/auth.service';
// Types
import { User } from 'src/app/shared/types/user.type';
// Constants
import { LOGIN_TEMPLATE_TEXT } from '../../constants/template.constants';

@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
	public TEMPLATE_TEXT = LOGIN_TEMPLATE_TEXT;

	public form = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(16)])
	});

	constructor(
		private authService: AuthService
	) {}

	public logIn(): void {
		this.authService.logIn(this.form.value as User);
	}
}
