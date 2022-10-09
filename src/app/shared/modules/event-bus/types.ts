export enum EventType {
	EVENT_CREATE_TASK = 'openModalCreateTask',
	EVENT_CREATE_CATEGORY = 'modalCreateCategory'
}

export interface BusEvent<T = any> {
	type: EventType;
	payload?: T;
}
