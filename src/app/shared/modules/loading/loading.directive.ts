import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[ui-loader]'
})
export class LoadingDirective {
	@Input()
	set hasView(condition: boolean) {
		if (condition && this.hasView) {
			this.viewContainer.createEmbeddedView(this.templateRef);
		} else if (!condition && !this.hasView) {
			this.viewContainer.clear();
		}
	}

	constructor(
		private templateRef: TemplateRef<unknown>,
		private viewContainer: ViewContainerRef
	) {}
}
