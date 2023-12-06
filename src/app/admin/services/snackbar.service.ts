import { Injectable } from '@angular/core';
import { MatSnackBar,   MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../component/Shared/snackbar/snackbar.component';
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private _snackBar: MatSnackBar
  ) { }



}
