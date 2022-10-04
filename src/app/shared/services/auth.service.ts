import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	public isAuth$ = new BehaviorSubject<boolean>(true);
}
