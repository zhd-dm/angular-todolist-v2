import { FormControl } from '@angular/forms';
import { User } from 'src/app/shared/types/user.type';

export type UserForLoginForm = Omit<User, 'name'>;

export type UserForRegisterForm = User & {
	repeatPassword: string;
};

export type LoginUserForm = {
	id: FormControl<number | null>;
	email: FormControl<string | null>;
	password: FormControl<string | null>;
};

export type RegisterUserForm = {
	name: FormControl<string | null>,
	email: FormControl<string | null>;
	password: FormControl<string | null>;
	repeatPassword: FormControl<string | null>;
};
