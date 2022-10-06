export type Task = {
	id: number;
	name: string;
	deadline: string;
	priority?: boolean;
	category?: string;
	ownerId?: number;
	isGeneral: boolean;
  }
