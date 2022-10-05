import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { HomeRoutingModule } from './home-routing.module';
// Components
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
	declarations: [
		HomePageComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule
	]
})
export class HomeModule { }
