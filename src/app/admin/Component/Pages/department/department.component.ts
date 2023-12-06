import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import { AddDepartmentComponent } from '../../shared/add-department/add-department.component';
import { MatDialog } from '@angular/material/dialog';
export interface PeriodicElement {
  name: string;
  position: number;

  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', symbol: 'H'},
  {position: 2, name: 'Helium', symbol: 'He'},
  {position: 3, name: 'Lithium',  symbol: 'Li'},
  {position: 4, name: 'Beryllium', symbol: 'Be'},
  {position: 5, name: 'Boron', symbol: 'B'},
  {position: 6, name: 'Carbon',symbol: 'C'},
  {position: 7, name: 'Nitrogen', symbol: 'N'},
  {position: 8, name: 'Oxygen', symbol: 'O'},
  {position: 9, name: 'Fluorine', symbol: 'F'},
  {position: 10, name: 'Neon',  symbol: 'Ne'},
];
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  dataSource :any = [];
 
  displayedColumns: string[] = ['_id', 'Dept_No', 'Department_NAME','product', '#products', 'status', 'Action', 'move'];
  new_color:any = [];


constructor(
 public _dialog: MatDialog
){}

  ngOnInit(): void {
   this.alldataGet()
  }




  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  alldataGet(){
   this.dataSource = new MatTableDataSource(ELEMENT_DATA);
   for(let c = 0; c<= ELEMENT_DATA.length; c++){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    this.new_color[c] = `rgb(${red},${green},${blue})`;
  }
  }
 open_modal(){
 this._dialog.open(AddDepartmentComponent,{
    data : {name : 'Department'}
 }) 

}
}
