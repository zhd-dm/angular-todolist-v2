import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';

const routes: Routes = [
	{
		path: '',
		component: CategoriesPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CategoryRoutingModule {}
