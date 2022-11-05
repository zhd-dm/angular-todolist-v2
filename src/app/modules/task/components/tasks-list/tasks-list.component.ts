import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject, take, takeUntil } from 'rxjs';
// Material
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// Services, components
import { CreateTaskModalComponent } from '../create-task-modal/create-task-modal.component';
import { DeleteTaskModalComponent } from '../delete-task-modal/delete-task-modal.component';
import { EditTaskModalComponent } from '../edit-task-modal/edit-task-modal.component';
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EventBusService } from 'src/app/shared/modules/event-bus/event-bus.service';
import { TaskService } from '../../services/task.service';
// Types
import { EventType } from 'src/app/shared/modules/event-bus/types';
import { Task } from '../../config/types/task.type';
// Constants
import { TASKS_LIST_TEMPLATE_TEXT } from '../../config/constants/template.constants';

@Component({
	selector: 'tasks-list',
	templateUrl: './tasks-list.component.html',
	styleUrls: ['./tasks-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent implements OnInit, OnDestroy {
	public TEMPLATE_TEXT = TASKS_LIST_TEMPLATE_TEXT;

	public data$ = new BehaviorSubject<MatTableDataSource<Task>>(new MatTableDataSource());

	public displayedColumns: string[] = ['id', 'name', 'deadline', 'priority', 'category', 'settings'];

	@ViewChild(MatSort) public sort = new MatSort;

	private destroy$ = new Subject();

	constructor(
		private loadingService: LoadingService,
		private authService: AuthService,
		private eventBusService: EventBusService,
		private taskService: TaskService,
		private dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.loadingService.startLoad();
		this.getTasks();
		this.eventBusSubscribe();
		this.authService.currentUrl$.next(EventType.TASK_URL);
	}

	ngOnDestroy(): void {
		this.destroy$.next(false);
		this.destroy$.complete();
	}

	public deleteTask(id: number): void {
		this.dialog.open(DeleteTaskModalComponent, { data: id })
			.afterClosed()
			.pipe(take(1))
			.subscribe(() => this.getTasks());
	}

	public editTask(task: Task): void {
		this.dialog.open(EditTaskModalComponent, { data: task })
			.afterClosed()
			.pipe(take(1))
			.subscribe(() => this.getTasks());
	}

	private getTasks(): void {
		this.taskService.getTasks()
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: tasks => {
					this.data$.next(new MatTableDataSource(tasks));
					this.data$.value.sort = this.sort;
					this.loadingService.stopLoad();
				},
				error: error => console.log(error)
			});
	}

	private eventBusSubscribe(): void {
		this.eventBusService.on(EventType.TASK_URL)
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				this.dialog.open(CreateTaskModalComponent);
			});

		this.eventBusService.on(EventType.UPDATE_TASK_LIST)
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				this.getTasks();
			});

		this.eventBusService.on(EventType.LOGOUT)
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				this.data$.next(new MatTableDataSource());
			});
	}

}
