import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { MaterialModule } from '../material/material.module';
// Components
import { HeaderComponent } from './components/header/header.component';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { UiInputComponent } from './components/ui-input/ui-input.component';



@NgModule({
	declarations: [
		HeaderComponent,
		UiButtonComponent,
		UiInputComponent
	],
	exports: [
		HeaderComponent,
		UiButtonComponent,
		UiInputComponent
	],
	imports: [
		CommonModule,
		MaterialModule
	]
})
export class UIModule { }
