import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoadingService {
	public loading$ = new BehaviorSubject<boolean>(false);

	public startLoad(): void {
		this.loading$.next(true);
	}

	public stopLoad(): void {
		this.loading$.next(false);
	}
}
