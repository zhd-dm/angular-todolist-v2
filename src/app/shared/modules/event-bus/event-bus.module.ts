import { NgModule } from '@angular/core';
import { EventBusService } from './event-bus.service';



@NgModule({
	providers: [EventBusService]
})
export class EventBusModule { }
