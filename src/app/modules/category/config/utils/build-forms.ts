import { FormControl, FormGroup, Validators } from '@angular/forms';
// Types
import { CategoryForCreate, CategoryForEdit, CreateCategoryForm, EditCategoryForm } from '../types/forms.types';

export const buildCreateCategoryForm = (form: CategoryForCreate | null): FormGroup<CreateCategoryForm> =>
	new FormGroup({
		name: new FormControl<string | null>(form?.name ?? null,
			[Validators.required, Validators.minLength(5)])
	});

export const buildEditCategoryForm = (form: CategoryForEdit | null): FormGroup<EditCategoryForm> =>
	new FormGroup({
		name: new FormControl<string | null>({ value: form?.name ?? null, disabled: true })
	});
