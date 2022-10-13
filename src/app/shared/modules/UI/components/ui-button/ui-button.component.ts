import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'ui-button',
	templateUrl: './ui-button.component.html',
	styleUrls: ['./ui-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiButtonComponent {
	@Input() type = 'text';

	@Input() typeDir = 'mat-raised-button';

	@Input() public disabled = false;

	@Input() public styleClasses: string | string[] = 'btn-accent';

	@Input() public label: string | null = null;

	@Input() public icon: string | null = null;

	@Input() public iconColor = 'primary';

	@Output() public buttonClick = new EventEmitter<Event>();

	public getClasses(selector: string | string[]): string | Set<string> {
		if (Array.isArray(selector)) {
			return new Set(selector);
		}
		return selector;
	}
}
