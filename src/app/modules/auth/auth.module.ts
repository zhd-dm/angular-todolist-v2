import { NgModule } from '@angular/core';
// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
// services
import { AuthService } from '../../shared/services/auth.service';
// components
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
		AuthRoutingModule,
		SharedModule
	],
	providers: [
		AuthService
	]
})
export class AuthModule { }
