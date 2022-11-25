import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// guards
import { AuthGuard } from './shared/guards/auth.guard';

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
		loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule),
		canActivate: [AuthGuard]
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
