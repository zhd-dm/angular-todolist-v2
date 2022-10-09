import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { TaskRoutingModule } from './task-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
// Components
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
// Services
import { TaskService } from './services/task.service';
import { NotificationService } from 'src/app/shared/services/notification.service';



@NgModule({
	declarations: [
		TasksPageComponent,
		TasksListComponent
	],
	imports: [
		CommonModule,
		TaskRoutingModule,
		SharedModule
	],
	providers: [
		TaskService,
		NotificationService
	]
})
export class TaskModule { }
