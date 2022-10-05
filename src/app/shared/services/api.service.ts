import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Constants
import { MethodNames } from '../constants/api.constants';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(
		private http: HttpClient
	) { }

	public sendRequest(method: MethodNames, url: string, body?: unknown): Observable<unknown> {
		switch(method) {
		case MethodNames.get: return this.http.get<unknown>(url);
		case MethodNames.post: return this.http.post<unknown>(url, body);
		case MethodNames.put: return this.http.put<unknown>(url, body);
		case MethodNames.delete: return this.http.delete<unknown>(url);
		}
	}
}
