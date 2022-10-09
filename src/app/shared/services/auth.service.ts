import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// Services
import { ApiService } from './api.service';
import { LoadingService } from './loading.service';
import { LocalStorageService } from './local-storage.service';
// Types
import { User } from '../types/user.type';
import { IValidate } from '../types/validate.type';
// Constants
import { ApiAuthNames, API_USERS, MethodNames } from '../constants/api.constants';
import { STORAGE_LOGGED_IN } from '../constants/local-storage.constants';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	public isAuth$ = new BehaviorSubject<boolean>(false);

	constructor(
		private apiService: ApiService,
		private loadingService: LoadingService,
		private localStorageService: LocalStorageService
	) {
		if (this.localStorageService.getItem(STORAGE_LOGGED_IN) as number > 0) {
			this.isAuth$.next(true);
		}
	}

	public logIn(user: User): Observable<IValidate> {
		this.loadingService.startLoad();
		return this.apiService.sendRequest(MethodNames.post, `${API_USERS}${ApiAuthNames.login}`, user) as Observable<IValidate>;
	}

	public register(user: User): Observable<IValidate> {
		return this.apiService.sendRequest(MethodNames.post, `${API_USERS}${ApiAuthNames.register}`, user) as Observable<IValidate>;
	}

	public logOut(): void {
		this.isAuth$.next(false);
		this.localStorageService.removeItem(STORAGE_LOGGED_IN);
	}
}
