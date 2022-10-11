import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
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
		path: '**',
		redirectTo: '/'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
