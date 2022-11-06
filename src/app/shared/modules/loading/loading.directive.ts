import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[loader]'
})
export class LoadingDirective {
	@Input()
	set loader(isLoad: boolean) {
		if (isLoad) {
			this.viewContainer.createEmbeddedView(this.templateRef);
		} else if (!isLoad) {
			this.viewContainer.clear();
		}
	}

	constructor(
		private templateRef: TemplateRef<unknown>,
		private viewContainer: ViewContainerRef
	) {}
}
