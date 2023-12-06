import { Component } from '@angular/core';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent {
  display: string = '';

  appendToDisplay(value: string): void {
    this.display += value;
  }

  clearDisplay(): void {
    this.display = '';
  }

  calculate(): void {
    try {
      this.display = eval(this.display); // Using eval for simplicity (not recommended for production)
    } catch (error) {
      this.display = 'Error';
    }
  }
}
