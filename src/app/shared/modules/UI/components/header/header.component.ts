import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { AuthService } from 'src/app/shared/services/auth.service';
// Constants
import { ROUTER_AUTH_LINKS } from 'src/app/shared/constants/router-link.constants';
import { HEADER_TEMPLATE_TEXT } from '../../constants/constants';

@Component({
	selector: 'ui-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

	public TEMPLATE_TEXT = HEADER_TEMPLATE_TEXT;

	public ROUTER_LINKS = ROUTER_AUTH_LINKS;

	public isAuth$ = this.authService.isAuth$;

	constructor(
		private authService: AuthService,
		private router: Router
	) {}

	public auth(link: string): void {
		this.router.navigate([link]);
	}

	public logOut(): void {
		this.isAuth$.next(false);
	}
}
