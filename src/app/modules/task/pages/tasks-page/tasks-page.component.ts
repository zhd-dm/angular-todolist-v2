import { ChangeDetectionStrategy, Component } from '@angular/core';
// Services
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';

@Component({
	selector: 'tasks-page',
	templateUrl: './tasks-page.component.html',
	styleUrls: ['./tasks-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksPageComponent {
	public loading$ = this.loadingService.loading$;

	constructor(
		private loadingService: LoadingService
	) {}
}
