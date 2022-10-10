export enum EventType {
	CREATE_TASK = 'openModalCreateTask',
	UPDATE_TASK_LIST = 'updateTaskList',
	CREATE_CATEGORY = 'openModalCreateCategory',
	UPDATE_CATEGORY_LIST = 'updateCategosyList'
}

/* eslint-disable */
export interface BusEvent<T = any> {
	type: EventType;
	payload?: T;
}
