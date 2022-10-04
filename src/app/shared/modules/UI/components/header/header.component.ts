import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { AuthService } from 'src/app/shared/services/auth.service';
// Constants
import { HEADER_CONSTANTS } from '../../constants/constants';

@Component({
	selector: 'ui-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

	public HEADER_CONSTANTS = HEADER_CONSTANTS;

	public isAuth$ = this.authService.isAuth$;

	constructor(
		private authService: AuthService,
		private router: Router
	) {}

	public logIn(): void {
		this.isAuth$.next(true);
		this.router.navigate(['/login']);
	}

	public register(): void {
		this.isAuth$.next(true);
		this.router.navigate(['/register']);
	}

	public logOut(): void {
		this.isAuth$.next(false);
	}
}
