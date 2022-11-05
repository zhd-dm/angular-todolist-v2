import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs';
// Services
import { CategoryService } from '../../services/category.service';
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { NotificationService } from 'src/app/shared/modules/notification/notification.service';
// Constants
import { DELETE_CATEGORY_MODAL_TEMPLATE_TEXT } from '../../config/constants/template.constants';

@Component({
	selector: 'delete-category-modal',
	templateUrl: './delete-category-modal.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteCategoryModalComponent{
	public TEMPLATE_TEXT = DELETE_CATEGORY_MODAL_TEMPLATE_TEXT;

	constructor(
		private dialogRef: MatDialogRef<DeleteCategoryModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { id: number },
		private categoryService: CategoryService,
		private loadingService: LoadingService,
		private notificationService: NotificationService
	) {}

	public deleteCategory(): void {
		this.loadingService.startLoad();
		this.categoryService.deleteCategory(this.data.id)
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
