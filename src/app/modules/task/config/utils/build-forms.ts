import { FormControl, FormGroup, Validators } from '@angular/forms';
// Types
import { CreateTaskForm, EditTaskForm, TaskForCreate, TaskForEdit } from '../types/forms.types';
import { Category } from 'src/app/modules/category/config/types/category.type';

export const buildCreateTaskForm = (form: TaskForCreate | null): FormGroup<CreateTaskForm> =>
	new FormGroup({
		name: new FormControl<string | null>(form?.name ?? null, [Validators.required, Validators.minLength(5)]),
		deadline: new FormControl<string | null>(form?.deadline ?? null, [Validators.required]),
		category: new FormControl<Category | null>(form?.category?.id ? { id: form?.category?.id, name: form?.category?.name } : null),
		priority: new FormControl<boolean | null>(form?.priority ?? null)
	});

export const buildEditTaskForm = (form: TaskForEdit | null): FormGroup<EditTaskForm> =>
	new FormGroup({
		name: new FormControl<string | null>({ value: form?.name ?? null, disabled: true }),
		deadline: new FormControl<string | null>(form?.deadline ?? null, [Validators.required]),
		categoryName: new FormControl<string | null>(form?.category?.name ?? null),
		priority: new FormControl<boolean | null>(form?.priority ?? null)
	});
