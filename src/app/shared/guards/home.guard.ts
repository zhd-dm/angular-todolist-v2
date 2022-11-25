import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
// services
import { AuthService } from '../services/auth.service';

@Injectable()
export class HomeGuard implements CanActivate {
	constructor(
		private authService: AuthService
	) {}

	canActivate(): boolean {
		return this.authService.isAuth$.getValue();
	}
}
