import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, take } from 'rxjs';
// Services
import { ApiService } from './api.service';
import { LoadingService } from './loading.service';
import { NotificationService } from './notification.service';
// Types
import { User } from '../types/user.type';
import { IValidate } from '../types/validate.type';
// Constants
import { ApiAuthNames, API_USERS, MethodNames } from '../constants/api.constants';
import { TASKS_ROUTER_LINKS } from '../constants/router-link.constants';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	public isAuth$ = new BehaviorSubject<boolean>(false);

	constructor(
		private router: Router,
		private apiService: ApiService,
		private loadingService: LoadingService,
		private notificationService: NotificationService
	) {}

	public logIn(user: User): void {
		this.loadingService.startLoad();
		this.apiService.sendRequest(MethodNames.post, `${API_USERS}${ApiAuthNames.login}`, user)
			.pipe(take(1))
			.subscribe({
				next: res => {
					this.loadingService.stopLoad();
					this.notificationService.openSnackBar((res as IValidate).message);
					if ((res as IValidate).status) {
						this.isAuth$.next(true);
						this.router.navigate([TASKS_ROUTER_LINKS.tasksList]);
					}
				},
				error: () => {
					this.loadingService.stopLoad();
				}
			});
	}

	public register(user: User): void {
		this.loadingService.startLoad();
		this.apiService.sendRequest(MethodNames.post, `${API_USERS}${ApiAuthNames.register}`, user)
			.pipe(take(1))
			.subscribe({
				next: res => {
					this.loadingService.stopLoad();
					this.notificationService.openSnackBar((res as IValidate).message);if ((res as IValidate).status) {
						this.isAuth$.next(true);
						this.router.navigate([TASKS_ROUTER_LINKS.tasksList]);
					}
				},
				error: () => {
					this.loadingService.stopLoad();
				}
			});
	}

}
