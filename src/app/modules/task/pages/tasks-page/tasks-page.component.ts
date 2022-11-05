import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'tasks-page',
	templateUrl: './tasks-page.component.html',
	styleUrls: ['./tasks-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksPageComponent {}
