import { FormControl } from '@angular/forms';
// Types
import { CreateTask, EditTask } from './task.type';
import { Category } from 'src/app/modules/category/config/types/category.type';

export type TaskForCreate = CreateTask;

export type TaskForEdit = EditTask;

export type CreateTaskForm = {
	name: FormControl<string | null>,
	deadline: FormControl<string | null>,
	category: FormControl<Category | null>,
	priority: FormControl<boolean | null>
};

export type EditTaskForm = {
	name: FormControl<string | null>,
	deadline: FormControl<string | null>,
	categoryName: FormControl<string | null>,
	priority: FormControl<boolean | null>
};
