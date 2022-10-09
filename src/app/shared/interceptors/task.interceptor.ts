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
import { Task } from '../../modules/task/types/task.type';
// Utils
import { generateIsValidateObj } from 'src/app/shared/utils/utils';

@Injectable()
export class TaskInterceptor implements HttpInterceptor {

	constructor(private localStorageService: LocalStorageService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		if (request.url.includes('/tasks')) {
			this.checkForEmptyStorage('tasks');
			if (request.url.includes('/get')) {
				return this.getTasks();
			} else if (request.url.includes('/create')) {
				return this.createTask(request.body as Task);
			} else if (request.url.includes('/update')) {
				return this.updateTask(request.body as Task);
			} else if (request.url.includes('/delete')) {
				const id = +request.url.split('?')[1];
				return this.deleteTask(id);
			}
		}

		return next.handle(request);
	}

	// Tasks

	private getTasks(): Observable<HttpEvent<Task[]>> {
		const loggedIn = this.localStorageService.getItem('loggedIn') as number;
		const storage = this.localStorageService.getItem('tasks') as Task[];
		return of(new HttpResponse<Task[]>({ status: 200, body: storage.filter(task => task.ownerId === loggedIn || task.isGeneral) }));
	}

	private createTask(task: Task): Observable<HttpEvent<IValidate>> {
		const loggedIn = this.localStorageService.getItem('loggedIn') as number;
		const storage = this.localStorageService.getItem('tasks') as Task[];
		task.id = Date.now();
		task.ownerId = loggedIn;
		storage.push(task);
		this.localStorageService.setItem('tasks', storage);
		return of(new HttpResponse<IValidate>({ status: 200, body: generateIsValidateObj(true, 'Task created success') }));
	}

	private updateTask(task: Task): Observable<HttpEvent<IValidate>> {
		const storage = this.localStorageService.getItem('tasks') as Task[];
		const index = storage.findIndex(storageTask => storageTask.id === task.id);
		storage[index] = task;
		this.localStorageService.setItem('tasks', storage);
		return of(new HttpResponse<IValidate>({ status: 200, body: generateIsValidateObj(true, 'Task updated success') }));
	}

	private deleteTask(id: number): Observable<HttpEvent<IValidate>> {
		const storage = this.localStorageService.getItem('tasks') as Task[];
		const index = storage.findIndex(task => task.id === id);
		storage.splice(index, 1);
		this.localStorageService.setItem('tasks', storage);
		return of(new HttpResponse<IValidate>({ status: 200, body: generateIsValidateObj(true, 'Task deleted success') }));
	}

	//----------------------------------------------------------------------------//

	private checkForEmptyStorage(key: string): void {
		if(!this.localStorageService.getItem(key)) {
			this.localStorageService.setItem(key, []);
		}
	}
}
