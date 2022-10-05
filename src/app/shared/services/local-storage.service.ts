import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

	public getItem(key: string): unknown {
		return JSON.parse(localStorage.getItem(key) || '[]');
	}

	public setItem(key: string, data: unknown): void {
		localStorage.setItem(key, JSON.stringify(data));
	}
}
