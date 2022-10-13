import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { MaterialModule } from '../material/material.module';
// Components
import { HeaderComponent } from './components/header/header.component';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
// Directives
import { UiSpinnerDirective } from './directives/ui-spinner.directive';
import { UiInputComponent } from './components/ui-input/ui-input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
	declarations: [
		HeaderComponent,
		UiSpinnerDirective,
		UiButtonComponent,
		UiInputComponent
	],
	exports: [
		HeaderComponent,
		UiSpinnerDirective,
		UiButtonComponent,
		UiInputComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MaterialModule
	]
})
export class UIModule { }
