import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { AuthService } from 'src/app/shared/services/auth.service';
import { EventBusService } from '../../../event-bus/event-bus.service';
// Types
import { EventType } from '../../../event-bus/types';
// Constants
import { ROUTER_LINKS } from 'src/app/shared/constants/router-link.constants';
import { HEADER_TEMPLATE_TEXT } from '../../constants/constants';

@Component({
	selector: 'ui-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
	public ROUTER_LINKS = ROUTER_LINKS;

	public TEMPLATE_TEXT = HEADER_TEMPLATE_TEXT;

	public EventType = EventType;

	public isAuth$ = this.authService.isAuth$;

	private currentLink = '';

	constructor(
		private router: Router,
		private authService: AuthService,
		private eventBusService: EventBusService
	) {}

	ngOnInit(): void {
		this.authService.currentUrl$.subscribe(link => this.currentLink = link);
	}

	public logOut(): void {
		this.authService.logOut();
		this.eventBusService.push({ type: EventType.LOGOUT });
		this.goTo(ROUTER_LINKS.home);
	}

	public checkNavigate(link: EventType): void {
		if (link === this.currentLink) {
			this.eventBusService.push({ type: link });
		} else {
			this.goTo(link);
		}
	}

	public goTo(link: string): void {
		this.router.navigate([link]);
	}
}
