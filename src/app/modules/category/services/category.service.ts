import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Services
import { ApiService } from 'src/app/shared/services/api.service';
// Types
import { Category } from '../config/types/category.type';
import { CategoryForCreate, CategoryForEdit } from '../config/types/forms.types';
import { IValidate } from 'src/app/shared/types/validate.type';
// Constants
import { ApiCategoryNames, API_CATEGORIES, MethodNames } from 'src/app/shared/constants/api.constants';

@Injectable()
export class CategoryService {

	constructor(
		private apiService: ApiService
	) {}

	public getCategories(): Observable<Category[]> {
		return this.apiService.sendRequest(MethodNames.get, `${API_CATEGORIES}${ApiCategoryNames.get}`);
	}

	public createCategory(category: CategoryForCreate): Observable<IValidate> {
		return this.apiService.sendRequest(MethodNames.post, `${API_CATEGORIES}${ApiCategoryNames.create}`, category);
	}

	public updateCategory(category: CategoryForEdit): Observable<IValidate> {
		return this.apiService.sendRequest(MethodNames.put, `${API_CATEGORIES}${ApiCategoryNames.update}`, category);
	}

	public deleteCategory(id: number): Observable<IValidate> {
		return this.apiService.sendRequest(MethodNames.delete, `${API_CATEGORIES}${ApiCategoryNames.delete}`, id);
	}
}
