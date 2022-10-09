import { Injectable } from '@angular/core';
import { filter, map, Observable, Subject } from 'rxjs';
import { BusEvent, EventType } from './types';

@Injectable()
export class EventBusService {
	private _eventSubject = new Subject<BusEvent>();

	/**
	 * Subscribe to event
	 * @param type - event type
	 */
	public on<T = any>(type: EventType): Observable<T> {
		return this._eventSubject.pipe(
			filter(event => event.type === type),
			map(event => event.payload)
		);
	}

	/**
	 * Push next event
	 * @param event - event name
	 */
	public push(event: BusEvent): void {
		this._eventSubject.next(event);
	}
}
