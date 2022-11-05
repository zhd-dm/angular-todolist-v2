import { Category } from 'src/app/modules/category/config/types/category.type';

export type Task = {
	id: number;
	name: string;
	deadline: string;
	priority: boolean | null;
	category: Category | null;
	ownerId: number;
}

export type CreateTask = Omit<Task, 'id' | 'ownerId'>;

export type EditTask = Omit<Task, 'ownerId'>;
