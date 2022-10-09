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

	public sendRequest(method: MethodNames, url: string, body?: unknown): Observable<unknown> {
		switch(method) {
		case MethodNames.get: return this.http.get<unknown>(BASE_URL + url);
		case MethodNames.post: return this.http.post<unknown>(BASE_URL + url, body);
		case MethodNames.put: return this.http.put<unknown>(BASE_URL + url, body);
		case MethodNames.delete: return this.http.delete<unknown>(BASE_URL + url + `?${body as number}`);
		}
	}
}
