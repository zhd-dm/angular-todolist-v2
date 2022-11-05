export type Category = {
	id: number;
	name: string;
}

export type CreateCategory = Omit<Category, 'id'>;

export type EditCategory = Category;
