import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs';
// Services
import { TaskService } from '../../services/task.service';
import { CategoryService } from 'src/app/modules/category/services/category.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
// Types
import { Task } from '../../types/task.type';
// Constants
import { EDIT_TASK_MODAL_TEMPLATE_TEXT } from '../../constants/template.constants';

@Component({
	selector: 'edit-task-modal',
	templateUrl: './edit-task-modal.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditTaskModalComponent {
	public TEMPLATE_TEXT = EDIT_TASK_MODAL_TEMPLATE_TEXT;

	public categories$ = this.categoryService.getCategories();

	public form: FormGroup;

	constructor(
		private dialogRef: MatDialogRef<EditTaskModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Task,
		private taskService: TaskService,
		private categoryService: CategoryService,
		private loadingService: LoadingService,
		private notificationService: NotificationService
	) {
		this.form = new FormGroup({
			name: new FormControl({ value: this.data.name, disabled: true }),
			deadline: new FormControl(this.data.deadline, [Validators.required]),
			category: new FormControl(this.data.categoryId),
			priority: new FormControl(this.data.priority)
		});
	}

	public updateTask(): void {
		const updatedTask = { ...this.data, ...this.form.value };
		this.loadingService.startLoad();
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
