import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

	public getItem<T>(key: string): T {
		return JSON.parse(localStorage.getItem(key) || '[]');
	}

	public setItem<T>(key: string, data: T): void {
		localStorage.setItem(key, JSON.stringify(data));
	}

	public removeItem(key: string): void {
		localStorage.removeItem(key);
	}
}
