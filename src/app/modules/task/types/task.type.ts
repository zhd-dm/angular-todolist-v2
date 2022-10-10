export type Task = {
	id: number;
	name: string;
	deadline: string;
	priority?: boolean;
	categoryId?: number;
	ownerId?: number;
	isGeneral: boolean;
  }
