import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { take } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// Services
import { TaskService } from '../../services/task.service';
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { NotificationService } from 'src/app/shared/modules/notification/notification.service';
// Constants
import { DELETE_TASK_MODAL_TEMPLATE_TEXT } from '../../constants/template.constants';

@Component({
	selector: 'delete-task-modal',
	templateUrl: './delete-task-modal.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteTaskModalComponent {
	public TEMPLATE_TEXT = DELETE_TASK_MODAL_TEMPLATE_TEXT;

	constructor(
		private dialogRef: MatDialogRef<DeleteTaskModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { id: number },
		private taskService: TaskService,
		private loadingService: LoadingService,
		private notificationService: NotificationService
	) {}

	public deleteTask(): void {
		this.loadingService.startLoad();
		this.taskService.deleteTask(this.data.id)
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
