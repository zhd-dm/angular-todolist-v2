import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';

const routes: Routes = [
	{
		path: '',
		component: TasksPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TaskRoutingModule {}
