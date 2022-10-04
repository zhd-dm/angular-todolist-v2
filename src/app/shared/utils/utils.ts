import { IValidate } from '../types/validate.type';

export const generateIsValidateObj = (status: boolean, message: string): IValidate => {
	return { status, message };
};
