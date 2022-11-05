import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { MaterialModule } from '../material/material.module';
import { LoadingModule } from '../loading/loading.module';
// Components
import { HeaderComponent } from './components/header/header.component';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { UiInputComponent } from './components/ui-input/ui-input.component';
import { UiSpinnerComponent } from './components/ui-spinner/ui-spinner.component';



@NgModule({
	declarations: [
		HeaderComponent,
		UiButtonComponent,
		UiInputComponent,
		UiSpinnerComponent
	],
	exports: [
		HeaderComponent,
		UiButtonComponent,
		UiInputComponent,
		UiSpinnerComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		LoadingModule
	]
})
export class UIModule { }
