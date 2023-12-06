import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {
MatSnackBarRef,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule,MatSnackBarModule],
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  snackBarRef = inject(MatSnackBarRef);
}
