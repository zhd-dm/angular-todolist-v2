import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './modules/material/material.module';
import { UIModule } from './modules/UI/ui.module';



@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MaterialModule,
		UIModule
	],
	exports: [
		MaterialModule,
		UIModule
	]
})
export class SharedModule { }
