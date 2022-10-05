import { NgModule } from '@angular/core';
// Modules
import { MaterialModule } from './modules/material/material.module';
import { UIModule } from './modules/UI/ui.module';
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
	providers: [LocalStorageService]
})
export class SharedModule { }
