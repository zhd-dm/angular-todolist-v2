import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// Constants
import { BASE_URL, MethodNames } from '../constants/api.constants';

@Injectable()
export class ApiService {

	constructor(
		private http: HttpClient
	) {}

	public sendRequest<T, U>(method: MethodNames, url: string, body?: U): Observable<T> {
		switch(method) {
		case MethodNames.get: return this.http.get<T>(BASE_URL + url);
		case MethodNames.post: return this.http.post<T>(BASE_URL + url, body);
		case MethodNames.put: return this.http.put<T>(BASE_URL + url, body);
		case MethodNames.delete: return this.http.delete<T>(BASE_URL + url + `?${body}`);
		default: return of();
		}
	}
}
