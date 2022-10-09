import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
// Services
import { LocalStorageService } from '../services/local-storage.service';
// Types
import { User } from '../types/user.type';
import { IValidate } from '../types/validate.type';
// Constants
// import { STORAGE_USERS } from '../constants/local-storage.constants';
// Utils
import { generateIsValidateObj } from '../utils/utils';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(private localStorageService: LocalStorageService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

		if (request.url.includes('/auth')) {
			this.checkForEmptyStorage('users');
			if (request.url.includes('/login')) {
				return this.loginUser(request.body as User);
			} else if (request.url.includes('/register')) {
				return this.registrationUser(request.body as User);
			}
		}

		return next.handle(request);
	}

	// Auth

	private loginUser(user: User): Observable<HttpEvent<IValidate>> {
		const isValidate: IValidate = this.checkUser(user);
		return of(new HttpResponse<IValidate>({ status: 200, body: isValidate }));
	}

	private registrationUser(user: User): Observable<HttpEvent<IValidate>> {
		const isValidate: IValidate = this.checkUser(user, true);
		return of(new HttpResponse<IValidate>({ status: 200, body: isValidate }));
	}

	private checkUser(user: User, isRegister?: boolean): IValidate {
		const storage: User[] = this.localStorageService.getItem('users') as User[];

		if (storage.length > 0) {
			for (let i = 0; i < storage.length; i++) {
				if (!isRegister) {
					if (user.email.toLowerCase() === storage[i].email && user.password === storage[i].password) {
						this.localStorageService.setItem('loggedIn', storage[i].id);
						return generateIsValidateObj(true, 'Login success');
					} else if (user.email.toLowerCase() === storage[i].email && user.password !== storage[i].password) {
						return generateIsValidateObj(false, 'Incorrect password!');
					} else {
						return generateIsValidateObj(false, 'User not found!');
					}
				} else {
					if (storage.find(item => user.email.toLowerCase() === item.email)) {
						return generateIsValidateObj(false, 'Email is busy!');
					} else {
						return this.saveUser(user, storage);
					}
				}
			}
		} else {
			if (!isRegister) {
				return generateIsValidateObj(false, 'User not found!');
			} else {
				return this.saveUser(user, storage);
			}
		}

		// TS thinks he can't return
		return {} as IValidate;
	}

	private saveUser(user: User, storage: User[]): IValidate {
		user.email.toLowerCase();
		user.id = Date.now();
		storage.push(user);
		this.localStorageService.setItem('users', storage);
		this.localStorageService.setItem('loggedIn', user.id);
		return generateIsValidateObj(true, 'Registration success');
	}

	//----------------------------------------------------------------------------//

	private checkForEmptyStorage(key: string): void {
		if(!this.localStorageService.getItem(key)) {
			this.localStorageService.setItem(key, []);
		}
	}
}
