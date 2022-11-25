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
import { LocalStorageService } from '../modules/local-storage/local-storage.service';
// Types
import { User, LoginUser, RegisterUser } from '../types/user.type';
import { IValidate } from '../types/validate.type';
// Constants
import { API_USERS, ApiAuthNames } from '../constants/api.constants';
import { STORAGE_USERS, STORAGE_LOGGED_IN } from '../constants/local-storage.constants';
import { AUTH_RESPONSE_MESSAGES } from '../constants/api-response-messages.const';
// Utils
import { generateIsValidateObj, isRegisterUser } from '../utils/utils';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(private localStorageService: LocalStorageService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

		if (request.url.includes(API_USERS)) {
			this.checkForEmptyStorage(STORAGE_USERS);
			if (request.url.includes(ApiAuthNames.login)) {
				return this.loginUser(request.body as LoginUser);
			} else if (request.url.includes(ApiAuthNames.register)) {
				return this.registrationUser(request.body as RegisterUser);
			}
		}

		return next.handle(request);
	}

	// Auth

	private loginUser(user: LoginUser): Observable<HttpEvent<IValidate>> {
		const isValidate: IValidate = this.checkUser(user);
		return of(new HttpResponse<IValidate>({ status: 200, body: isValidate }));
	}

	private registrationUser(user: LoginUser): Observable<HttpEvent<IValidate>> {
		const isValidate: IValidate = this.checkUser(user);
		return of(new HttpResponse<IValidate>({ status: 200, body: isValidate }));
	}

	private checkUser(user: LoginUser | RegisterUser): IValidate {
		const storage: User[] = this.localStorageService.getItem(STORAGE_USERS) as User[];

		if (storage.length > 0) {
			for (let i = 0; i < storage.length; i++) {
				if (!isRegisterUser(user)) {
					if (user.email.toLowerCase() === storage[i].email && user.password === storage[i].password) {
						this.localStorageService.setItem(STORAGE_LOGGED_IN, storage[i].id);
						return generateIsValidateObj(AUTH_RESPONSE_MESSAGES.loginSuccess);
					} else if (user.email.toLowerCase() === storage[i].email && user.password !== storage[i].password) {
						return generateIsValidateObj(AUTH_RESPONSE_MESSAGES.passwordIncorrect);
					} else {
						return generateIsValidateObj(AUTH_RESPONSE_MESSAGES.userNotFound);
					}
				} else {
					if (storage.find(item => user.email.toLowerCase() === item.email)) {
						return generateIsValidateObj(AUTH_RESPONSE_MESSAGES.emailIsBusy);
					} else {
						return this.saveUser(user, storage);
					}
				}
			}
		} else {
			if (!isRegisterUser(user)) {
				return generateIsValidateObj(AUTH_RESPONSE_MESSAGES.userNotFound);
			} else {
				return this.saveUser(user, storage);
			}
		}

		// TS thinks he can't return
		return {} as IValidate;
	}

	private saveUser(user: RegisterUser, storage: User[]): IValidate {
		const newUser: User = { ...user, id: Date.now() };
		newUser.email.toLowerCase();
		storage.push(newUser);
		this.localStorageService.setItem(STORAGE_USERS, storage);
		this.localStorageService.setItem(STORAGE_LOGGED_IN, newUser.id);
		return generateIsValidateObj(AUTH_RESPONSE_MESSAGES.registerSuccess);
	}

	//----------------------------------------------------------------------------//

	private checkForEmptyStorage(key: string): void {
		if(!this.localStorageService.getItem(key)) {
			this.localStorageService.setItem(key, []);
		}
	}
}
