import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Services
import { AuthService } from 'src/app/shared/services/auth.service';
// Types
import { User } from 'src/app/shared/types/user.type';
// Constants
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
		private authService: AuthService
	) {}

	public register(): void {
		this.authService.register(this.form.value as User);
	}
}
