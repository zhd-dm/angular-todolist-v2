import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Subject, take, takeUntil } from 'rxjs';
// Services, components
import { CreateCategoryModalComponent } from '../create-category-modal/create-category-modal.component';
import { DeleteCategoryModalComponent } from '../delete-category-modal/delete-category-modal.component';
import { EditCategoryModalComponent } from '../edit-category-modal/edit-category-modal.component';
import { CategoryService } from '../../services/category.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { EventBusService } from 'src/app/shared/modules/event-bus/event-bus.service';
import { AuthService } from 'src/app/shared/services/auth.service';
// Types
import { EventType } from 'src/app/shared/modules/event-bus/types';
import { Category } from '../../types/category.type';
// Constants
import { CATEGORIES_LIST_TEMPLATE_TEXT } from '../../constants/template.constants';

@Component({
	selector: 'categories-list',
	templateUrl: './categories-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesListComponent implements OnInit, OnDestroy {
	public TEMPLATE_TEXT = CATEGORIES_LIST_TEMPLATE_TEXT;

	public data$ = new BehaviorSubject<MatTableDataSource<Category>>(new MatTableDataSource());

	public displayedColumns: string[] = ['id', 'name', 'color', 'settings'];

	@ViewChild(MatSort) public sort = new MatSort;

	private destroy$ = new Subject();

	constructor(
		private categoryService: CategoryService,
		private loadingService: LoadingService,
		private eventBusService: EventBusService,
		private authService: AuthService,
		private dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.loadingService.startLoad();
		this.getCategories();
		this.eventBusSubscribe();
		this.authService.currentUrl$.next(EventType.CATEGORY_URL);
	}

	ngOnDestroy(): void {
		this.destroy$.next(false);
		this.destroy$.complete();
	}

	public deleteCategory(id: number): void {
		this.dialog.open(DeleteCategoryModalComponent, { data: id })
			.afterClosed()
			.pipe(take(1))
			.subscribe(() => this.getCategories());
	}

	public editCategory(category: Category): void {
		this.dialog.open(EditCategoryModalComponent, { data: category })
			.afterClosed()
			.pipe(take(1))
			.subscribe(() => this.getCategories());
	}

	private getCategories(): void {
		this.categoryService.getCategories()
			.subscribe({
				next: categories => {
					this.data$.next(new MatTableDataSource(categories));
					this.data$.value.sort = this.sort;
					this.loadingService.stopLoad();
				},
				error: error => console.log(error)
			});
	}

	private eventBusSubscribe(): void {
		this.eventBusService.on(EventType.CATEGORY_URL)
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				this.dialog.open(CreateCategoryModalComponent);
			});

		this.eventBusService.on(EventType.UPDATE_CATEGORY_LIST)
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				this.getCategories();
			});
	}
}
