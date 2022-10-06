import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
// Material
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// Services
import { LoadingService } from 'src/app/shared/services/loading.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { TaskService } from '../../services/task.service';
// Types
import { Task } from '../../types/task.type';

@Component({
	selector: 'tasks-list',
	templateUrl: './tasks-list.component.html',
	styleUrls: ['./tasks-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent implements OnInit {
	public data$ = new MatTableDataSource<Task[]>([]);

	public displayedColumns: string[] = ['id', 'name', 'deadline', 'priority', 'category', 'settings'];

	@ViewChild(MatSort) sort: MatSort = new MatSort;

	constructor(
		private dialogRef: MatDialog,
		private loadingService: LoadingService,
		private notificationService: NotificationService,
		private taskService: TaskService
	) {}

	ngOnInit(): void {
		this.getTasks();
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
					// this.data$. = tasks;
					this.data$.sort = this.sort;
				},
				error: error => console.log(error)
			});
	}

}
