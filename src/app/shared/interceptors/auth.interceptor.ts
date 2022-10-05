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
// Utils
import { generateIsValidateObj } from '../utils/utils';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(private localStorageService: LocalStorageService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

		if(request.url.indexOf('auth') !== 0) {
			switch(request.method) {
			case 'GET': return this.getUsers();
			// case 'POST': return this.loginUser(request.body as User);
			case 'POST': return this.registrationUser(request.body as User);
			}
		}

		return next.handle(request);
	}

	private loginUser(user: User): Observable<HttpEvent<IValidate>> {
		const isValidate: IValidate = this.checkUser(user, true);
		return of(new HttpResponse<IValidate>({ status: 200, body: isValidate }));
	}

	private registrationUser(user: User): Observable<HttpEvent<IValidate>> {
		const isValidate: IValidate = this.checkUser(user, true);
		return of(new HttpResponse<IValidate>({ status: 200, body: isValidate }));
	}

	private getUsers(): Observable<HttpEvent<User[]>> {
		this.checkForEmptyStorage('users');
		const storage: User[] = this.localStorageService.getItem('users') as User[];
		return of (new HttpResponse<User[]>({ status: 200, body: storage }));
	}

	private checkUser(user: User, isRegister?: boolean): IValidate {
		this.checkForEmptyStorage('users');
		const storage: User[] = this.localStorageService.getItem('users') as User[];
		let validate = {} as IValidate;

		storage.forEach(item => {
			if (!isRegister) {
				if (user.email.toLowerCase() === item.email && user.password === item.password) {
					localStorage.setItem('loggedIn', user.email.toLowerCase());
					validate = generateIsValidateObj(true, 'Login success');
				} else {
					validate = generateIsValidateObj(false, 'User not found!');
				}
			} else {
				if (user.email.toLowerCase() === item.email) {
					validate = generateIsValidateObj(false, 'Email is busy!');
				} else {
					storage.push(user);
					this.localStorageService.setItem('users', storage);
					validate = generateIsValidateObj(true, 'Registration success');
				}
			}
		});

		return validate;
	}

	private checkForEmptyStorage(key: string): void {
		if(!this.localStorageService.getItem(key)) {
			this.localStorageService.setItem(key, []);
		}
	}
}
