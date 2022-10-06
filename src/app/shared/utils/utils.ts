import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// Types
import { IValidate } from '../types/validate.type';

export const generateIsValidateObj = (status: boolean, message: string): IValidate => {
	return { status, message };
};

export const generateSuccessResponse = (body: unknown, status = 200): Observable<HttpResponse<unknown>> => {
	return of(new HttpResponse<unknown>({ status, body }));
};
