import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs';
// Services
import { CategoryService } from '../../services/category.service';
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { NotificationService } from 'src/app/shared/modules/notification/notification.service';
import { EventBusService } from 'src/app/shared/modules/event-bus/event-bus.service';
// Types
import { EventType } from 'src/app/shared/modules/event-bus/types';
import { Category } from '../../types/category.type';
// Constants
import { ROUTER_LINKS } from 'src/app/shared/constants/router-link.constants';
import { CREATE_CATEGORY_MODAL_TEMPLATE_TEXT } from '../../constants/template.constants';

@Component({
	selector: 'create-category-modal',
	templateUrl: './create-category-modal.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCategoryModalComponent {
	public ROUTER_LINKS = ROUTER_LINKS;

	public TEMPLATE_TEXT = CREATE_CATEGORY_MODAL_TEMPLATE_TEXT;

	public form = new FormGroup ({
		name: new FormControl('', [Validators.required, Validators.minLength(5)])
		// color: new FormControl('')
	});

	constructor(
		private router: Router,
		private dialogRef: MatDialogRef<CreateCategoryModalComponent>,
		private categoryService: CategoryService,
		private loadingService: LoadingService,
		private notificationService: NotificationService,
		private eventBusService: EventBusService
	) {}

	public createCategory(): void {
		this.loadingService.startLoad();
		this.categoryService.createCategory(this.form.value as Category)
			.pipe(take(1))
			.subscribe(response => {
				this.loadingService.stopLoad();
				this.notificationService.openSnackBar(response.message || '');
				if (response.status) {
					this.goTo(this.ROUTER_LINKS.categoriesList);
					this.eventBusService.push({ type: EventType.UPDATE_CATEGORY_LIST });
				}
			});
		this.dialogRef.close();
	}

	private goTo(link: string): void {
		this.router.navigate([link]);
	}
}
