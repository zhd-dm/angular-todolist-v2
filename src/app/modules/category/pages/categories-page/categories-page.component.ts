import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'categories-page',
	templateUrl: './categories-page.component.html',
	styleUrls: ['./categories-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesPageComponent {}
