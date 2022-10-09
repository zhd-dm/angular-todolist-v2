import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Modules
import { TaskRoutingModule } from './task-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
// Components
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { CreateTaskModalComponent } from './components/create-task-modal/create-task-modal.component';
// Services
import { TaskService } from './services/task.service';
import { CategoryService } from '../category/services/category.service';
import { NotificationService } from 'src/app/shared/services/notification.service';



@NgModule({
	declarations: [
		TasksPageComponent,
		TasksListComponent,
		CreateTaskModalComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		TaskRoutingModule,
		SharedModule
	],
	providers: [
		TaskService,
		CategoryService,
		NotificationService
	]
})
export class TaskModule { }
