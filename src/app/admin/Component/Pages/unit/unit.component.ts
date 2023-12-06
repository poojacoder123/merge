import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'; 
import { AddDepartmentComponent } from '../../shared/add-department/add-department.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'kg', weight: 1.0079, symbol: 'H'},
  {position: 2, name: ' g ', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Liter ', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'mL', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'pices', weight: 10.811, symbol: 'B'}

];
@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {
  constructor(
    public _diogs : MatDialog
  ){}
  ngOnInit(): void {
    this.alldataGet()
  }
  dataSource :any = [];
  displayedColumns: string[] = ['_id','color' , 'brandname','items', 'product_count','status', 'Action', 'move'];
  new_color:any = [];


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


   add_unit(){
    this._diogs.open(AddDepartmentComponent,{
      data : {name : "Unit"}
    })
   }
}
