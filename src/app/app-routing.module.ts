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
		path: 'home',
		loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule)
	},
	{
		path: 'tasks',
		loadChildren: () => import('./modules/task/task.module').then(module => module.TaskModule)
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
