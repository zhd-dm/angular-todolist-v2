import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// App module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Modules
import { SharedModule } from './shared/shared.module';
// Guards
import { AuthGuard } from './shared/guards/auth.guard';
import { HomeGuard } from './shared/guards/home.guard';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		SharedModule
	],
	bootstrap: [AppComponent],
	providers: [AuthGuard, HomeGuard]
})
export class AppModule { }
