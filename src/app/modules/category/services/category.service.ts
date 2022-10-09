import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Services
import { ApiService } from 'src/app/shared/services/api.service';
// Types
import { Category } from '../types/category.type';
import { IValidate } from 'src/app/shared/types/validate.type';
// Constants
import { ApiCategoryNames, API_TASKS, MethodNames } from 'src/app/shared/constants/api.constants';

@Injectable()
export class CategoryService {

	constructor(
		private apiService: ApiService
	) {}

	public getCategories(): Observable<Category[]> {
		return this.apiService.sendRequest(MethodNames.get, `${API_TASKS}${ApiCategoryNames.get}`) as Observable<Category[]>;
	}

	public createCategory(category: Category): Observable<IValidate> {
		return this.apiService.sendRequest(MethodNames.post, `${API_TASKS}${ApiCategoryNames.create}`, category) as Observable<IValidate>;
	}

	public updateCategory(category: Category): Observable<IValidate> {
		return this.apiService.sendRequest(MethodNames.put, `${API_TASKS}${ApiCategoryNames.update}`, category) as Observable<IValidate>;
	}

	public deleteCategory(id: number): Observable<IValidate> {
		return this.apiService.sendRequest(MethodNames.delete, `${API_TASKS}${ApiCategoryNames.delete}`, id) as Observable<IValidate>;
	}
}
