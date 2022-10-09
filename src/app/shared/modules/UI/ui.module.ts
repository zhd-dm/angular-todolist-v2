import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { MaterialModule } from '../material/material.module';
// Components
import { HeaderComponent } from './components/header/header.component';
// Directives
import { UiSpinnerDirective } from './directives/ui-spinner.directive';



@NgModule({
	declarations: [
		HeaderComponent,
		UiSpinnerDirective
	],
	exports: [
		HeaderComponent,
		UiSpinnerDirective
	],
	imports: [
		CommonModule,
		MaterialModule
	]
})
export class UIModule { }
