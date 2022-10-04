import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { SharedModule } from 'src/app/shared/shared.module';
// services
import { AuthService } from './services/auth.service';
// components
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';



@NgModule({
	declarations: [
		AuthPageComponent,
		LoginFormComponent,
		RegisterFormComponent
	],
	imports: [
		CommonModule,
		SharedModule
	],
	providers: [
		AuthService
	]
})
export class AuthModule { }
