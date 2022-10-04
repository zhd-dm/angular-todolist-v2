import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./modules/task/task.module').then(module => module.TaskModule)
	},
	{
		path: 'auth',
		loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule)
	},
	{
		path: 'categories',
		loadChildren: () => import('./modules/category/category.module').then(module => module.CategoryModule)
	},
	{
		path: '**',
		redirectTo: '/'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
