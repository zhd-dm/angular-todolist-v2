import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Modules
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
// Components
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryService } from './services/category.service';
import { CreateCategoryModalComponent } from './components/create-category-modal/create-category-modal.component';
import { DeleteCategoryModalComponent } from './components/delete-category-modal/delete-category-modal.component';
// Services
import { NotificationService } from 'src/app/shared/services/notification.service';
import { EditCategoryModalComponent } from './components/edit-category-modal/edit-category-modal.component';



@NgModule({
	declarations: [
		CategoriesPageComponent,
		CategoriesListComponent,
		CreateCategoryModalComponent,
		DeleteCategoryModalComponent,
		EditCategoryModalComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		CategoryRoutingModule,
		SharedModule
	],
	providers: [
		CategoryService,
		NotificationService
	]
})
export class CategoryModule { }
