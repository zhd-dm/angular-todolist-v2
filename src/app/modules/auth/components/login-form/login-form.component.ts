import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {}
