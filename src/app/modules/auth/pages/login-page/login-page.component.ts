import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'login-page',
	templateUrl: './login-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {}
