import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs';
// Services
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { NotificationService } from 'src/app/shared/modules/notification/notification.service';
import { EventBusService } from 'src/app/shared/modules/event-bus/event-bus.service';
import { TaskService } from '../../services/task.service';
import { CategoryService } from 'src/app/modules/category/services/category.service';
// Types
import { EventType } from 'src/app/shared/modules/event-bus/types';
// Constants
import { TASKS_ROUTER_LINKS } from 'src/app/shared/constants/router-link.constants';
import { CREATE_TASK_MODAL_TEMPLATE_TEXT } from '../../config/constants/template.constants';
import { CreateTaskForm, TaskForCreate } from '../../config/types/forms.types';
import { buildCreateTaskForm } from '../../config/utils/build-forms';

@Component({
	selector: 'create-task-modal',
	templateUrl: './create-task-modal.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTaskModalComponent {
	public TEMPLATE_TEXT = CREATE_TASK_MODAL_TEMPLATE_TEXT;

	public categories$ = this.categoryService.getCategories();

	public form: FormGroup<CreateTaskForm>;

	constructor(
		private router: Router,
		private dialogRef: MatDialogRef<CreateTaskModalComponent>,
		private loadingService: LoadingService,
		private notificationService: NotificationService,
		private eventBusService: EventBusService,
		private taskService: TaskService,
		private categoryService: CategoryService
	) {
		this.form = buildCreateTaskForm(null);
	}

	public createTask(): void {
		this.loadingService.startLoad();
		this.taskService.createTask(this.form.value as TaskForCreate)
			.pipe(take(1))
			.subscribe(response => {
				this.loadingService.stopLoad();
				this.notificationService.openSnackBar(response.message || '');
				if (response.status) {
					this.goTo(TASKS_ROUTER_LINKS.tasksList);
					this.eventBusService.push({ type: EventType.UPDATE_TASK_LIST });
				}
			});
		this.dialogRef.close();
	}

	public goTo(link: string): void {
		this.router.navigate([link]);
	}
}
