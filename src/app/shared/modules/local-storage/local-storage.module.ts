import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Services
import { LocalStorageService } from './local-storage.service';



@NgModule({
	declarations: [],
	imports: [ CommonModule ],
	providers: [ LocalStorageService ]
})
export class LocalStorageModule { }
