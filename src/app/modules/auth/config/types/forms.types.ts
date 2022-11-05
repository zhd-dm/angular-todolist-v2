import { FormControl } from '@angular/forms';
import { LoginUser, RegisterUser } from 'src/app/shared/types/user.type';

export type UserForLogin = LoginUser;

export type UserForRegister = RegisterUser & {
	repeatPassword: string;
};

export type LoginUserForm = {
	email: FormControl<string | null>;
	password: FormControl<string | null>;
};

export type RegisterUserForm = {
	name: FormControl<string | null>,
	email: FormControl<string | null>;
	password: FormControl<string | null>;
	repeatPassword: FormControl<string | null>;
};
