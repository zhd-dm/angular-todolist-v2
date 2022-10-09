import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, take, tap } from 'rxjs';
// Material
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// Services, components
import { CreateTaskModalComponent } from '../create-task-modal/create-task-modal.component';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { EventBusService } from 'src/app/shared/modules/event-bus/event-bus.service';
import { TaskService } from '../../services/task.service';
// Types
import { EventType } from 'src/app/shared/modules/event-bus/types';
import { Task } from '../../types/task.type';
// Constants
import { TASKS_LIST_TEMPLATE_TEXT } from '../../constants/template.constants';

@Component({
	selector: 'tasks-list',
	templateUrl: './tasks-list.component.html',
	styleUrls: ['./tasks-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent implements OnInit {
	public TEMPLATE_TEXT = TASKS_LIST_TEMPLATE_TEXT;

	public data$ = new BehaviorSubject<MatTableDataSource<Task>>(new MatTableDataSource());

	public displayedColumns: string[] = ['id', 'name', 'deadline', 'priority', 'category', 'settings'];

	@ViewChild(MatSort) sort: MatSort = new MatSort;

	constructor(
		private dialogRef: MatDialog,
		private loadingService: LoadingService,
		private notificationService: NotificationService,
		private eventBusService: EventBusService,
		private taskService: TaskService,
		private dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.getTasks();
		this.eventBusSubscribe();
	}

	public deleteTask(id: number): void {
		this.taskService.deleteTask(id)
			.pipe(take(1))
			.subscribe({
				next: response => {
					this.loadingService.loading$.next(false);
					this.notificationService.openSnackBar(response.message || '');
				},
				error: error => {
					this.loadingService.loading$.next(false);
					console.error(error);
				}
			});
	}

	public editTask(task: Task): void {
		this.taskService.updateTask(task)
			.pipe(take(1))
			.subscribe({
				next: response => {
					this.loadingService.loading$.next(false);
					this.notificationService.openSnackBar(response.message || '');
				},
				error: error => {
					this.loadingService.loading$.next(false);
					console.error(error);
				}
			});
	}

	private getTasks(): void {
		this.taskService.getTasks()
			.subscribe({
				next: tasks => {
					this.data$.next(new MatTableDataSource(tasks));
					this.data$.value.sort = this.sort;
				},
				error: error => console.log(error)
			});
	}

	private eventBusSubscribe(): void {
		this.eventBusService.on(EventType.CREATE_TASK)
			.pipe(
				take(1),
				tap(() => {
					this.dialog.open(CreateTaskModalComponent);
				})
			)
			.subscribe();
	}

}
