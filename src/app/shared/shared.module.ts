import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
// Modules
import { MaterialModule } from './modules/material/material.module';
import { UIModule } from './modules/UI/ui.module';
// Interceptors
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { TaskInterceptor } from './interceptors/task.interceptor';
// Services
import { LocalStorageService } from './services/local-storage.service';



@NgModule({
	declarations: [],
	imports: [
		MaterialModule,
		UIModule
	],
	exports: [
		MaterialModule,
		UIModule
	],
	providers: [
		LocalStorageService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TaskInterceptor,
			multi: true
		}
	]
})
export class SharedModule { }
