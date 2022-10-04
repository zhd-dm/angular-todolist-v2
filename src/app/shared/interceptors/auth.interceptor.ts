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

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(private localStorageService: LocalStorageService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

		if(request.url.indexOf('auth') >= 0) {
			switch(request.method) {
			case 'GET': return this.getUsers(request.body as User);
			case 'POST': return this.saveUser(request.body as User);
			}
		}

		return next.handle(request);
	}

	private getUsers(user: User): Observable<HttpEvent<IValidate>> {
		const isValidate: IValidate = this.checkUser(user);
		return of(new HttpResponse<IValidate>({ status: 200, body: isValidate }));
	}

	private saveUser(user: User): Observable<HttpEvent<IValidate>> {
		const isValidate: IValidate = this.checkUser(user, true);
		return of(new HttpResponse<IValidate>({ status: 200, body: isValidate }));
	}

	private checkUser(user: User, isRegister?: boolean): IValidate {
		if(!this.localStorageService.getItem('users')) {
			this.localStorageService.setItem('users', []);
		}

		const storage: User[] = this.localStorageService.getItem('users') as User[];
		const validate = {} as IValidate;

		storage.forEach(item => {
			if (!isRegister) {
				if (user.email.toLowerCase() === item.email && user.password === item.password) {
					localStorage.setItem('loggedIn', user.email.toLowerCase());
					validate.status = true;
					validate.message = 'Login success';
					return;
				} else {
					validate.status = false;
					validate.message = 'User not found!';
					return;
				}
			} else {
				if (user.email.toLowerCase() === item.email) {
					validate.status = false;
					validate.message = 'Email is busy!';
					return;
				} else {
					validate.status = true;
					validate.message = 'Registration success';
					return;
				}
			}
		});

		return validate;
	}
}
