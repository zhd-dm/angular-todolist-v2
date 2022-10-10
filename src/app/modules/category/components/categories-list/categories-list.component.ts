import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Subject, take, takeUntil } from 'rxjs';
// Services
import { CategoryService } from '../../services/category.service';
import { EventBusService } from 'src/app/shared/modules/event-bus/event-bus.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
// Types
import { EventType } from 'src/app/shared/modules/event-bus/types';
import { Category } from '../../types/category.type';
// Constants
import { CATEGORIES_LIST_TEMPLATE_TEXT } from '../../constants/template.constants';

@Component({
	selector: 'categories-list',
	templateUrl: './categories-list.component.html',
	styleUrls: ['./categories-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesListComponent implements OnInit, OnDestroy {
	public TEMPLATE_TEXT = CATEGORIES_LIST_TEMPLATE_TEXT;

	public data$ = new BehaviorSubject<MatTableDataSource<Category>>(new MatTableDataSource());

	public displayedColumns: string[] = ['id', 'name', 'color'];

	@ViewChild(MatSort) public sort = new MatSort;

	private destroy$ = new Subject();

	constructor(
		private categoryService: CategoryService,
		private loadingService: LoadingService,
		private eventBusService: EventBusService,
		private dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.loadingService.startLoad();
		this.getCategories();
		this.eventBusSubscribe();
	}

	ngOnDestroy(): void {
		this.destroy$.next(false);
		this.destroy$.complete();
	}

	public deleteCategory(id: number): void {
		// this.dialog.open(DeleteTaskModalComponent, { data: id })
		// 	.afterClosed()
		// 	.pipe(take(1))
		// 	.subscribe(() => this.getCategories());
	}

	public editCategory(category: Category): void {
		// this.dialog.open(EditTaskModalComponent, { data: category })
		// 	.afterClosed()
		// 	.pipe(take(1))
		// 	.subscribe(() => this.getCategories());
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
		this.eventBusService.on(EventType.CREATE_CATEGORY)
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				// this.dialog.open(CreateTaskModalComponent);
			});

		this.eventBusService.on(EventType.UPDATE_CATEGORY_LIST)
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				this.getCategories();
			});
	}
}
