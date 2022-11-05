export type User = {
	id: number;
	name: string;
	email: string;
	password: string;
};

export type LoginUser = Omit<User, 'id' | 'name'>;

export type RegisterUser = Omit<User, 'id'>;
