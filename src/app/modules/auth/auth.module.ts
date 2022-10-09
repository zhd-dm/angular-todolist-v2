import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Modules
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
// Components
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';



@NgModule({
	declarations: [
		LoginPageComponent,
		RegisterPageComponent,
		LoginFormComponent,
		RegisterFormComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		AuthRoutingModule,
		SharedModule
	]
})
export class AuthModule { }
