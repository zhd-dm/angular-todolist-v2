export enum EventType {
	CREATE_TASK = 'openModalCreateTask',
	CREATE_CATEGORY = 'openModalCreateCategory'
}

export interface BusEvent<T = any> {
	type: EventType;
	payload?: T;
}
