import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Services
import { ApiService } from 'src/app/shared/services/api.service';
// Types
import { Task } from '../config/types/task.type';
import { TaskForCreate, TaskForEdit } from '../config/types/forms.types';
import { IValidate } from 'src/app/shared/types/validate.type';
// Constants
import { ApiTaskNames, API_TASKS, MethodNames } from 'src/app/shared/constants/api.constants';

@Injectable()
export class TaskService {

	constructor(
		private apiService: ApiService
	) {}

	public getTasks(): Observable<Task[]> {
		return this.apiService.sendRequest(MethodNames.get, `${API_TASKS}${ApiTaskNames.get}`);
	}

	public createTask(task: TaskForCreate): Observable<IValidate> {
		return this.apiService.sendRequest(MethodNames.post, `${API_TASKS}${ApiTaskNames.create}`, task);
	}

	public updateTask(task: TaskForEdit): Observable<IValidate> {
		return this.apiService.sendRequest(MethodNames.put, `${API_TASKS}${ApiTaskNames.update}`, task);
	}

	public deleteTask(id: number): Observable<IValidate> {
		return this.apiService.sendRequest(MethodNames.delete, `${API_TASKS}${ApiTaskNames.delete}`, id);
	}
}
