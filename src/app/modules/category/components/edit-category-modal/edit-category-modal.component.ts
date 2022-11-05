import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
// Services
import { CategoryService } from '../../services/category.service';
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { NotificationService } from 'src/app/shared/modules/notification/notification.service';
// Types
import { Category } from '../../types/category.type';
// Constants
import { ROUTER_LINKS } from 'src/app/shared/constants/router-link.constants';
import { EDIT_CATEGORY_MODAL_TEMPLATE_TEXT } from '../../constants/template.constants';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'edit-category-modal',
	templateUrl: './edit-category-modal.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCategoryModalComponent {
	public ROUTER_LINKS = ROUTER_LINKS;

	public TEMPLATE_TEXT = EDIT_CATEGORY_MODAL_TEMPLATE_TEXT;

	public form: FormGroup;

	constructor(
		private dialogRef: MatDialogRef<EditCategoryModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Category,
		private router: Router,
		private categoryService: CategoryService,
		private loadingService: LoadingService,
		private notificationService: NotificationService
	) {
		this.form = new FormGroup ({
			name: new FormControl({ value: this.data.name, disabled: true }),
			color: new FormControl(this.data.color, [Validators.required])
		});
	}

	public updateCategory(): void {
		const updatedCategory = { ...this.data, ...this.form.value };
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
