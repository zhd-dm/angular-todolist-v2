import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
// services
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private authService: AuthService
	) {}

	canActivate(): boolean {
		return this.authService.isAuth$.getValue();
	}
}
