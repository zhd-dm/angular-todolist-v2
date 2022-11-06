import { ChangeDetectionStrategy, Component } from '@angular/core';
// Services
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';

@Component({
	selector: 'categories-page',
	templateUrl: './categories-page.component.html',
	styleUrls: ['./categories-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesPageComponent {
	public loading$ = this.loadingService.loading$;

	constructor(
		private loadingService: LoadingService
	) {}
}
