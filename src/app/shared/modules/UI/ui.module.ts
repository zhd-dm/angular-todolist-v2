import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { MaterialModule } from '../material/material.module';
// Components
import { HeaderComponent } from './components/header/header.component';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
// Directives
import { UiSpinnerDirective } from './directives/ui-spinner.directive';



@NgModule({
	declarations: [
		HeaderComponent,
		UiSpinnerDirective,
		UiButtonComponent
	],
	exports: [
		HeaderComponent,
		UiSpinnerDirective,
		UiButtonComponent
	],
	imports: [
		CommonModule,
		MaterialModule
	]
})
export class UIModule { }
