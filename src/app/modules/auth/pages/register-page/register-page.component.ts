import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'register-page',
	templateUrl: './register-page.component.html',
	styleUrls: ['./register-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPageComponent {
}
