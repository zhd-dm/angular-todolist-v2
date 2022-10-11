export const HOME_ROUTER_LINKS = {
	home: '/home'
};

export const AUTH_ROUTER_LINKS = {
	auth: '/auth',
	login: '/auth/login',
	register: '/auth/register'
};

export const TASKS_ROUTER_LINKS = {
	tasksList: `${HOME_ROUTER_LINKS.home}/tasks`
};

export const CATEGORIES_ROUTER_LINKS = {
	categoriesList: `${HOME_ROUTER_LINKS.home}/categories`
};

export const ROUTER_LINKS = {
	...HOME_ROUTER_LINKS,
	...AUTH_ROUTER_LINKS,
	...TASKS_ROUTER_LINKS,
	...CATEGORIES_ROUTER_LINKS
};
