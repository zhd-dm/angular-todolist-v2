import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { EventBusService } from '../../../event-bus/event-bus.service';
import { AuthService } from 'src/app/shared/services/auth.service';
// Constants
import { AUTH_ROUTER_LINKS } from 'src/app/shared/constants/router-link.constants';
import { HEADER_TEMPLATE_TEXT } from '../../constants/constants';
import { EventType } from '../../../event-bus/types';

@Component({
	selector: 'ui-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

	public TEMPLATE_TEXT = HEADER_TEMPLATE_TEXT;

	public ROUTER_LINKS = AUTH_ROUTER_LINKS;

	public EventType = EventType;

	public isAuth$ = this.authService.isAuth$;

	constructor(
		public eventBusService: EventBusService,
		private authService: AuthService,
		private router: Router
	) {}

	public auth(link: string): void {
		this.router.navigate([link]);
	}

	public logOut(): void {
		this.authService.logOut();
	}
}
