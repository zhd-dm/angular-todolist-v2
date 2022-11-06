import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Services
import { LoadingService } from './loading.service';
// Directives
import { LoadingDirective } from './loading.directive';



@NgModule({
	declarations: [ LoadingDirective ],
	exports: [ LoadingDirective ],
	imports: [ CommonModule ],
	providers: [ LoadingService ]
})
export class LoadingModule { }
