import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ui-spinner',
	templateUrl: './ui-spinner.component.html',
	styleUrls: ['./ui-spinner.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiSpinnerComponent {}
