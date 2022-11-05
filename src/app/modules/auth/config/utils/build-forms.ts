import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
// types
import { LoginUserForm, RegisterUserForm, UserForLoginForm, UserForRegisterForm } from '../types/forms.types';

export const buildLoginForm = (row: UserForLoginForm | null): FormGroup<LoginUserForm> =>
	new FormGroup({
		id: new FormControl<number | null>(row?.id ?? null),
		email: new FormControl<string | null>(row?.email ?? null),
		password: new FormControl<string | null>(row?.password ?? null)
	});

export const buildRegisterForm = (row: UserForRegisterForm | null): FormGroup<RegisterUserForm> =>
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
