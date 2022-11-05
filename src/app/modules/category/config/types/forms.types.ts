import { FormControl } from '@angular/forms';
// Types
import { CreateCategory, EditCategory } from './category.type';

export type CategoryForCreate = CreateCategory;

export type CategoryForEdit = EditCategory;

export type CreateCategoryForm = {
	name: FormControl<string | null>
};

export type EditCategoryForm = {
	name: FormControl<string | null>
};
