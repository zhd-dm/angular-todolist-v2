import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
// Modules
import { MaterialModule } from './modules/material/material.module';
import { UIModule } from './modules/UI/ui.module';
import { NotificationModule } from './modules/notification/notification.module';
import { LocalStorageModule } from './modules/local-storage/local-storage.module';
import { LoadingModule } from './modules/loading/loading.module';
// Interceptors
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { TaskInterceptor } from './interceptors/task.interceptor';
import { CategoryInterceptor } from './interceptors/category.interceptor';
// Services
import { ApiService } from './services/api.service';



@NgModule({
	declarations: [],
	imports: [
		MaterialModule,
		UIModule,
		NotificationModule,
		LocalStorageModule,
		LoadingModule
	],
	exports: [
		MaterialModule,
		UIModule
	],
	providers: [
		ApiService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TaskInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: CategoryInterceptor,
			multi: true
		}
	]
})
export class SharedModule { }
