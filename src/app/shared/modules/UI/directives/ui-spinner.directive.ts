import { Component, Directive, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'uiSpinnerComponent',
	template: `
		<ng-template #spinner>
			<h1>text</h1>
		</ng-template>
	`
})
export class UiSpinnerComponent {
	@ViewChild('spinner') public spinner?: TemplateRef<unknown>;
}

@Directive({
	selector: '[uiSpinner]'
})
export class UiSpinnerDirective {
	@Input() set while(condition: boolean) {
		if (!condition) {
			this.viewContainerRef.createEmbeddedView(this.templateRef);
		} else {
			this.viewContainerRef.clear();
		}
	}

	constructor(
		private templateRef: TemplateRef<unknown>,
		private viewContainerRef: ViewContainerRef
	) {}
}
