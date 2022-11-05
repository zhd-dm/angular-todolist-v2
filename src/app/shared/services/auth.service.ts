import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
// Services
import { ApiService } from './api.service';
import { LoadingService } from './loading.service';
import { LocalStorageService } from './local-storage.service';
// Types
import { EventType } from '../modules/event-bus/types';
import { LoginUser, RegisterUser } from '../types/user.type';
import { IValidate } from '../types/validate.type';
// Constants
import { ApiAuthNames, API_USERS, MethodNames } from '../constants/api.constants';
import { STORAGE_LOGGED_IN } from '../constants/local-storage.constants';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	public isAuth$ = new BehaviorSubject<boolean>(false);

	public currentUrl$ = new ReplaySubject<EventType>(1);

	constructor(
		private apiService: ApiService,
		private loadingService: LoadingService,
		private localStorageService: LocalStorageService
	) {
		if (this.localStorageService.getItem(STORAGE_LOGGED_IN) as number > 0) {
			this.isAuth$.next(true);
		}
	}

	public logIn(user: LoginUser): Observable<IValidate> {
		this.loadingService.startLoad();
		return this.apiService.sendRequest(MethodNames.post, `${API_USERS}${ApiAuthNames.login}`, user);
	}

	public register(user: RegisterUser): Observable<IValidate> {
		return this.apiService.sendRequest(MethodNames.post, `${API_USERS}${ApiAuthNames.register}`, user);
	}

	public logOut(): void {
		this.isAuth$.next(false);
		this.localStorageService.removeItem(STORAGE_LOGGED_IN);
	}
}
