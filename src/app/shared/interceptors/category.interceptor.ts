import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
// Services
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
// Types
import { IValidate } from 'src/app/shared/types/validate.type';
import { Category } from '../../modules/category/types/category.type';
// Utils
import { generateIsValidateObj } from 'src/app/shared/utils/utils';

@Injectable()
export class CategoryInterceptor implements HttpInterceptor {

	constructor(private localStorageService: LocalStorageService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		if (request.url.includes('/categories')) {
			this.checkForEmptyStorage('categories');
			if (request.url.includes('/get')) {
				return this.getCategories();
			} else if (request.url.includes('/create')) {
				return this.createCategory(request.body as Category);
			} else if (request.url.includes('/update')) {
				return this.updateCategory(request.body as Category);
			} else if (request.url.includes('/delete')) {
				const id = +request.url.split('?')[1];
				return this.deleteTask(id);
			}
		}

		return next.handle(request);
	}

	// Categories

	private getCategories(): Observable<HttpEvent<Category[]>> {
		const storage = this.localStorageService.getItem('categories') as Category[];
		return of(new HttpResponse<Category[]>({ status: 200, body: storage }));
	}

	private createCategory(category: Category): Observable<HttpEvent<IValidate>> {
		const storage = this.localStorageService.getItem('categories') as Category[];
		category.id = Date.now();
		storage.push(category);
		this.localStorageService.setItem('categories', storage);
		return of(new HttpResponse<IValidate>({ status: 200, body: generateIsValidateObj(true, 'Category created success') }));
	}

	private updateCategory(category: Category): Observable<HttpEvent<IValidate>> {
		const storage = this.localStorageService.getItem('tasks') as Category[];
		const index = storage.findIndex(storageCategory => storageCategory.id === category.id);
		storage[index] = category;
		this.localStorageService.setItem('categories', storage);
		return of(new HttpResponse<IValidate>({ status: 200, body: generateIsValidateObj(true, 'Category updated success') }));
	}

	private deleteTask(id: number): Observable<HttpEvent<IValidate>> {
		const storage = this.localStorageService.getItem('categories') as Category[];
		const index = storage.findIndex(category => category.id === id);
		storage.splice(index, 1);
		this.localStorageService.setItem('categories', storage);
		return of(new HttpResponse<IValidate>({ status: 200, body: generateIsValidateObj(true, 'Task deleted success') }));
	}

	//----------------------------------------------------------------------------//

	private checkForEmptyStorage(key: string): void {
		if(!this.localStorageService.getItem(key)) {
			this.localStorageService.setItem(key, []);
		}
	}
}
