import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class LoadingService {
	public loading$ = new ReplaySubject<boolean>(1);

	public startLoad(): void {
		this.loading$.next(true);
	}

	public stopLoad(): void {
		setTimeout(() => {
			this.loading$.next(false);
		}, 500);
	}
}
