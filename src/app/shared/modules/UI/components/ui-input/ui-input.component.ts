import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
// Types
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
	selector: 'ui-input',
	templateUrl: './ui-input.component.html',
	styleUrls: ['./ui-input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiInputComponent {
	@Input() public colorField = 'accent';

	@Input() public appearance: MatFormFieldAppearance = 'outline';

	@Input() public labelText: string | null = null;

	@Input() public inputType = 'text';

	@Input() public formControlName: string | null = null;

	@Input() public placeholder: string | null = null;
}
