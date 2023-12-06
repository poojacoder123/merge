
import { Component } from '@angular/core';



export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position:' ROUND BANK', name: 'Benjamin Adams', weight:120187.23 },
  {position:'COBIZ BANK', name: 'Chisom Latifat', weight: 235267.50},
  {position:'US BANK, NA', name: 'Earl Hane MD',  weight:102473.00},

];




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
 
})


export class DashboardComponent {
constructor(){}
displayedColumns: string[] = ['position', 'name', 'weight'];
dataSource = ELEMENT_DATA;



}


