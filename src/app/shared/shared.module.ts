import { NgModule } from '@angular/core';

import { MaterialModule } from './modules/material/material.module';
import { UIModule } from './modules/UI/ui.module';



@NgModule({
	declarations: [],
	imports: [
		MaterialModule,
		UIModule
	],
	exports: [
		MaterialModule,
		UIModule
	]
})
export class SharedModule { }
