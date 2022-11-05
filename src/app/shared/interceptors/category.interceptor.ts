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
import { LocalStorageService } from 'src/app/shared/modules/local-storage/local-storage.service';
// Types
import { IValidate } from 'src/app/shared/types/validate.type';
import { Category, CreateCategory, EditCategory } from '../../modules/category/config/types/category.type';
// Constants
import { API_CATEGORIES, ApiCategoryNames } from '../constants/api.constants';
import { STORAGE_CATEGORIES } from '../constants/local-storage.constants';
import { CATEGORY_RESPONSE_MESSAGES } from '../constants/api-response-messages.const';
// Utils
import { generateIsValidateObj } from 'src/app/shared/utils/utils';

@Injectable()
export class CategoryInterceptor implements HttpInterceptor {

	constructor(private localStorageService: LocalStorageService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		if (request.url.includes(API_CATEGORIES)) {
			this.checkForEmptyStorage(STORAGE_CATEGORIES);
			if (request.url.includes(ApiCategoryNames.get)) {
				return this.getCategories();
			} else if (request.url.includes(ApiCategoryNames.create)) {
				return this.createCategory(request.body as CreateCategory);
			} else if (request.url.includes(ApiCategoryNames.update)) {
				return this.updateCategory(request.body as EditCategory);
			} else if (request.url.includes(ApiCategoryNames.delete)) {
				const id = +request.url.split('?')[1];
				return this.deleteCategory(id);
			}
		}

		return next.handle(request);
	}

	// Categories

	private getCategories(): Observable<HttpEvent<Category[]>> {
		const storage = this.localStorageService.getItem(STORAGE_CATEGORIES) as Category[];
		return of(new HttpResponse<Category[]>({ status: 200, body: storage }));
	}

	private createCategory(category: CreateCategory): Observable<HttpEvent<IValidate>> {
		const storage = this.localStorageService.getItem(STORAGE_CATEGORIES) as Category[];
		const newCategory = { ...category, id: Date.now() };
		storage.push(newCategory);
		this.localStorageService.setItem(STORAGE_CATEGORIES, storage);
		return of(new HttpResponse<IValidate>({ status: 200, body: generateIsValidateObj(true, CATEGORY_RESPONSE_MESSAGES.createSuccess) }));
	}

	private updateCategory(category: EditCategory): Observable<HttpEvent<IValidate>> {
		const storage = this.localStorageService.getItem(STORAGE_CATEGORIES) as Category[];
		const index = storage.findIndex(storageCategory => storageCategory.id === category.id);
		storage[index] = category;
		this.localStorageService.setItem(STORAGE_CATEGORIES, storage);
		return of(new HttpResponse<IValidate>({ status: 200, body: generateIsValidateObj(true, CATEGORY_RESPONSE_MESSAGES.updateSuccess) }));
	}

	private deleteCategory(id: number): Observable<HttpEvent<IValidate>> {
		const storage = this.localStorageService.getItem(STORAGE_CATEGORIES) as Category[];
		const index = storage.findIndex(category => category.id === id);
		storage.splice(index, 1);
		this.localStorageService.setItem(STORAGE_CATEGORIES, storage);
		return of(new HttpResponse<IValidate>({ status: 200, body: generateIsValidateObj(true, CATEGORY_RESPONSE_MESSAGES.deleteSuccess) }));
	}

	//----------------------------------------------------------------------------//

	private checkForEmptyStorage(key: string): void {
		if(!this.localStorageService.getItem(key)) {
			this.localStorageService.setItem(key, []);
		}
	}
}
