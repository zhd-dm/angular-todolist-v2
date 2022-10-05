import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// Services
import { ApiService } from './api.service';
// Types
import { User } from '../types/user.type';
import { IValidate } from '../types/validate.type';
// Constants
import { ApiUserNames, API_USERS, MethodNames } from '../constants/api.constants';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	public isAuth$ = new BehaviorSubject<boolean>(false);

	constructor(
		private apiService: ApiService
	) {}

	public logIn(user: User): Observable<IValidate> {
		return this.apiService.sendRequest(MethodNames.post, `${API_USERS}${ApiUserNames.login}`, user) as Observable<IValidate>;
	}

	public register(user: User): Observable<IValidate> {
		return this.apiService.sendRequest(MethodNames.post, `${API_USERS}${ApiUserNames.register}`, user) as Observable<IValidate>;
	}

	public getUsers(): Observable<User[]> {
		return this.apiService.sendRequest(MethodNames.get, API_USERS) as Observable<User[]>;
	}

}
