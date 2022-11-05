import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs';
// Services
import { TaskService } from '../../services/task.service';
import { CategoryService } from 'src/app/modules/category/services/category.service';
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { NotificationService } from 'src/app/shared/modules/notification/notification.service';
// Types
import { EditTaskForm, TaskForEdit } from '../../config/types/forms.types';

// Constants
import { EDIT_TASK_MODAL_TEMPLATE_TEXT } from '../../config/constants/template.constants';
import { buildEditTaskForm } from '../../config/utils/build-forms';
@Component({
	selector: 'edit-task-modal',
	templateUrl: './edit-task-modal.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditTaskModalComponent {
	public TEMPLATE_TEXT = EDIT_TASK_MODAL_TEMPLATE_TEXT;

	public categories$ = this.categoryService.getCategories();

	public form: FormGroup<EditTaskForm>;

	constructor(
		private dialogRef: MatDialogRef<EditTaskModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: TaskForEdit,
		private taskService: TaskService,
		private categoryService: CategoryService,
		private loadingService: LoadingService,
		private notificationService: NotificationService
	) {
		this.form = buildEditTaskForm(this.data);
	}

	public updateTask(): void {
		this.loadingService.startLoad();
		const updatedTask = { ...this.data, ...this.form.value as TaskForEdit };
		this.taskService.updateTask(updatedTask)
			.pipe(take(1))
			.subscribe({
				next: response => {
					this.dialogRef.close();
					this.notificationService.openSnackBar(response.message || '');
				},
				error: error => {
					this.dialogRef.close();
					console.error(error);
				}
			});
	}
}
