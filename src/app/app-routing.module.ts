import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router
// Guards
import { AuthGuard } from './shared/guards/auth.guard';
import { HomeGuard } from './shared/guards/home.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'auth',
		loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'home',
		loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule),
		canActivate: [HomeGuard]
	},
	{
		path: '**',
		redirectTo: '/home/tasks'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
