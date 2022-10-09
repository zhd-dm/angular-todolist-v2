import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Modules
import { TaskRoutingModule } from './task-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
// Components
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
// Services
import { TaskService } from './services/task.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { CreateTaskModalComponent } from './components/create-task-modal/create-task-modal.component';



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
		NotificationService
	]
})
export class TaskModule { }
