import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'tasks',
		pathMatch: 'full'
	},
	{
		path: 'tasks',
		loadChildren: () => import('../task/task.module').then(module => module.TaskModule)
	},
	{
		path: 'categories',
		loadChildren: () => import('../category/category.module').then(module => module.CategoryModule)
	},
	{
		path: '**',
		redirectTo: '/home/tasks'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule {}
