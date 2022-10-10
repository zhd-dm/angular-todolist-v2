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
import { CreateCategoryModalComponent } from './create-category-modal/create-category-modal.component';
// Services
import { NotificationService } from 'src/app/shared/services/notification.service';



@NgModule({
	declarations: [
		CategoriesPageComponent,
		CategoriesListComponent,
		CreateCategoryModalComponent
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
