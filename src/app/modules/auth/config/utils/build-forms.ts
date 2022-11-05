import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
// types
import { LoginUserForm, RegisterUserForm, UserForLogin, UserForRegister } from '../types/forms.types';

export const buildLoginForm = (row: UserForLogin | null): FormGroup<LoginUserForm> =>
	new FormGroup({
		email: new FormControl<string | null>(row?.email ?? null,
			[Validators.required, Validators.email]),

		password: new FormControl<string | null>(row?.password ?? null,
			[Validators.required, Validators.minLength(5), Validators.maxLength(16)])
	});

export const buildRegisterForm = (row: UserForRegister | null): FormGroup<RegisterUserForm> =>
	new FormGroup({
		name: new FormControl<string | null>(row?.name ?? null,
			[Validators.required, Validators.minLength(3), Validators.maxLength(9)]),

		email: new FormControl<string | null>(row?.email ?? null,
			[Validators.required, Validators.email]),

		password: new FormControl<string | null>(row?.password ?? null,
			[Validators.required, Validators.minLength(5), Validators.maxLength(16)]),

		repeatPassword: new FormControl<string | null>(row?.repeatPassword ?? null,
			[Validators.required, Validators.minLength(5), Validators.maxLength(16)])
	}, { validators: checkPasswords });

const checkPasswords: ValidatorFn = (form: AbstractControl):  ValidationErrors | null => {
	const pass = form.get('password')?.value;
	const confirmPass = form.get('repeatPassword')?.value;
	return pass === confirmPass ? null : { notSame: true };
};
