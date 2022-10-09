export enum EventType {
	CREATE_TASK = 'openModalCreateTask',
	CREATE_CATEGORY = 'openModalCreateCategory',
	UPDATE_TASK_LIST = 'updateTaskList'
}

export interface BusEvent<T = any> {
	type: EventType;
	payload?: T;
}
