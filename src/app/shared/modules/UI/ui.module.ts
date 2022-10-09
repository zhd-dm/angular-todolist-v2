import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { MaterialModule } from '../material/material.module';
import { EventBusModule } from '../event-bus/event-bus.module';
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
		MaterialModule,
		EventBusModule
	]
})
export class UIModule { }
