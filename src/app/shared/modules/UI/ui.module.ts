import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

// components
import { HeaderComponent } from './components/header/header.component';



@NgModule({
	declarations: [
		HeaderComponent
	],
	exports: [
		HeaderComponent
	],
	imports: [
		CommonModule,
		MaterialModule
	]
})
export class UIModule { }
