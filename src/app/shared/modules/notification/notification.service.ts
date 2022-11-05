import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable()
export class NotificationService {
	private horizontalPosition: MatSnackBarHorizontalPosition = 'center';

	private verticalPosition: MatSnackBarVerticalPosition = 'top';

	constructor(
		private snackBar: MatSnackBar
	) {}

	openSnackBar(message = 'Snackbar', btnCloseText = 'Close') {
		this.snackBar.open(message, btnCloseText, {
			horizontalPosition: this.horizontalPosition,
			verticalPosition: this.verticalPosition,
			duration: 3000
		});
	}
}
