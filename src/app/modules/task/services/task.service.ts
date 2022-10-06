import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Services
import { ApiService } from 'src/app/shared/services/api.service';
// Types
import { Task } from '../types/task.type';
import { IValidate } from 'src/app/shared/types/validate.type';
// Constants
import { ApiTaskNames, API_TASKS, MethodNames } from 'src/app/shared/constants/api.constants';

@Injectable()
export class TaskService {

	constructor(
		private apiService: ApiService
	) {}

	public getTasks(): Observable<Task[]> {
		return this.apiService.sendRequest(MethodNames.get, `${API_TASKS}${ApiTaskNames.get}`) as Observable<Task[]>;
	}

	public createTask(task: Task): Observable<IValidate> {
		return this.apiService.sendRequest(MethodNames.post, `${API_TASKS}${ApiTaskNames.create}`, task) as Observable<IValidate>;
	}

	public updateTask(task: Task): Observable<IValidate> {
		return this.apiService.sendRequest(MethodNames.put, `${API_TASKS}${ApiTaskNames.update}`, task) as Observable<IValidate>;
	}

	public deleteTask(id: number): Observable<IValidate> {
		return this.apiService.sendRequest(MethodNames.delete, `${API_TASKS}${ApiTaskNames.delete}`, id) as Observable<IValidate>;
	}
}
