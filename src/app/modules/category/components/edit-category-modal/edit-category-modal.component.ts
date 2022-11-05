import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
// Services
import { CategoryService } from '../../services/category.service';
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { NotificationService } from 'src/app/shared/modules/notification/notification.service';
// Types
import { CategoryForEdit, EditCategoryForm } from '../../config/types/forms.types';
// Constants
import { ROUTER_LINKS } from 'src/app/shared/constants/router-link.constants';
import { EDIT_CATEGORY_MODAL_TEMPLATE_TEXT } from '../../config/constants/template.constants';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { buildEditCategoryForm } from '../../config/utils/build-forms';

@Component({
	selector: 'edit-category-modal',
	templateUrl: './edit-category-modal.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCategoryModalComponent {
	public ROUTER_LINKS = ROUTER_LINKS;

	public TEMPLATE_TEXT = EDIT_CATEGORY_MODAL_TEMPLATE_TEXT;

	public form: FormGroup<EditCategoryForm>;

	constructor(
		private dialogRef: MatDialogRef<EditCategoryModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: CategoryForEdit,
		private router: Router,
		private categoryService: CategoryService,
		private loadingService: LoadingService,
		private notificationService: NotificationService
	) {
		this.form = buildEditCategoryForm(this.data);
	}

	public updateCategory(): void {
		const updatedCategory = { ...this.data, ...this.form.value as CategoryForEdit };
		this.loadingService.startLoad();
		this.categoryService.updateCategory(updatedCategory)
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
		this.dialogRef.close();
	}

	public goTo(link: string): void {
		this.router.navigate([link]);
	}
}
