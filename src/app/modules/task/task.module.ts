import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// Modules
import { TaskRoutingModule } from './task-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
// Components
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
// Services
import { TaskService } from './services/task.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
// Interceptors
import { TaskInterceptor } from './task.interceptor';



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
		NotificationService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TaskInterceptor,
			multi: true
		}
	]
})
export class TaskModule { }
