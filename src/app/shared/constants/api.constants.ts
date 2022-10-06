export const BASE_URL = 'http://localhost:4200';

export enum MethodNames {
	post = 'POST',
	get = 'GET',
	put = 'PUT',
	delete = 'DELETE'
}

export const API_USERS = '/auth';

export enum ApiAuthNames {
	login = '/login',
	register = '/register',
	update = '/update'
}

export const API_TASKS = `${BASE_URL}/tasks`;

export enum ApiTaskNames {
	get = 'get',
	create = '/create',
	update = '/update',
	delete = '/delete'
}

export const API_CATEGORIES = `${BASE_URL}/catogories`;

export enum ApiCategoryNames {
	get = 'get',
	create = '/create',
	update = '/update',
	delete = '/delete'
}
