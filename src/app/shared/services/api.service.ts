import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Constants
import { BASE_URL, MethodNames } from '../constants/api.constants';

@Injectable()
export class ApiService {

	constructor(
		private http: HttpClient
	) {}

	// eslint-disable-next-line consistent-return
	public sendRequest<T>(method: MethodNames, url: string, body?: unknown): Observable<T> {
		switch(method) {
		case MethodNames.get: return this.http.get<T>(BASE_URL + url);
		case MethodNames.post: return this.http.post<T>(BASE_URL + url, body);
		case MethodNames.put: return this.http.put<T>(BASE_URL + url, body);
		case MethodNames.delete: return this.http.delete<T>(BASE_URL + url + `?${body as number}`);
		}
	}
}
