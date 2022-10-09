import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
// Services
import { LoadingService } from 'src/app/shared/services/loading.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { TaskService } from '../../services/task.service';
import { CategoryService } from 'src/app/modules/category/services/category.service';
// Types
import { Task } from '../../types/task.type';
// Constants
import { TASKS_ROUTER_LINKS } from 'src/app/shared/constants/router-link.constants';
import { CREATE_TASK_MODAL_TEMPLATE_TEXT } from '../../constants/template.constants';

@Component({
	selector: 'create-task-modal',
	templateUrl: './create-task-modal.component.html',
	styleUrls: ['./create-task-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTaskModalComponent {
	public TEMPLATE_TEXT = CREATE_TASK_MODAL_TEMPLATE_TEXT;

	public categories$ = this.categoryService.getCategories();

	public form = new FormGroup ({
		name: new FormControl('', [Validators.required, Validators.minLength(5)]),
		deadline: new FormControl('', [Validators.required]),
		category: new FormControl(''),
		priority: new FormControl('')
	});

	constructor(
		private router: Router,
		private loadingService: LoadingService,
		private notificationService: NotificationService,
		private taskService: TaskService,
		private categoryService: CategoryService
	) {}

	public createTask(): void {
		this.loadingService.startLoad();
		this.taskService.createTask(this.form.value as Task)
			.pipe(take(1))
			.subscribe(response => {
				this.loadingService.stopLoad();
				this.notificationService.openSnackBar(response.message || '');
				if (response.status) {
					this.router.navigate([TASKS_ROUTER_LINKS.tasksList]);
				}
			});
	}
}
