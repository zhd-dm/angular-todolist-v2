import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Services
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
// Constants
import { TEMPLATE_TEXT } from '../../constants/login.constants';
import { USERS } from 'src/app/shared/constants/local-storage.constants';

@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
	public TEMPLATE_TEXT = TEMPLATE_TEXT;

	public form = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(16)])
	});

	constructor(private localStorageService: LocalStorageService) {}

	public logIn(): void {
		this.localStorageService.getItem(USERS);
	}
}
