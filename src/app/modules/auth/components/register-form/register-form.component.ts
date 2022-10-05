import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
// Services
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
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
			Validators.required, Validators.minLength(3), Validators.maxLength(9), Validators.pattern('[A-Za-z]{5}')
		]),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(16)]),
		repeatPassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(16)])
	});

	constructor(
		private authService: AuthService,
		private loadingService: LoadingService
	) {}

	public register(): void {
		this.loadingService.loading$.next(true);
		this.authService.register(this.form.value as User)
			.pipe(take(1))
			.subscribe(() => {
				this.loadingService.loading$.next(false);
			});
	}
}
