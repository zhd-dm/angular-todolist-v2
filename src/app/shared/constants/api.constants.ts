const BASE_URL = 'https://api';

export const API_USERS = '/users';

export enum ApiUserNames {
	login = '/login',
	register = '/register',
	update = '/update'
}

export const API_TASKS = `${BASE_URL}/tasks`;

export const API_CATEGORIES = `${BASE_URL}/catogories`;

export enum MethodNames {
	post = 'POST',
	get = 'GET',
	put = 'PUT',
	delete = 'DELETE'
}
