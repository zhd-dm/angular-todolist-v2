import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'auth-page',
	templateUrl: './auth-page.component.html',
	styleUrls: ['./auth-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthPageComponent {}
