import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'; 
import { AddDepartmentComponent } from '../../shared/add-department/add-department.component';
import { UnitsService } from 'src/app/admin/services/Units/units.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {
  constructor(
    public _diogs : MatDialog,
    private _Unit : UnitsService
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

    this._Unit.Get_All_Unit().subscribe(res=>{
      this.dataSource = new MatTableDataSource(res);
      for(let c = 0; c<= res.length; c++){
       const red = Math.floor(Math.random() * 256);
       const green = Math.floor(Math.random() * 256);
       const blue = Math.floor(Math.random() * 256);
       this.new_color[c] = `rgb(${red},${green},${blue})`;
     }
    })
    
   }


   add_unit(){
    this._diogs.open(AddDepartmentComponent,{
      data : {name : "Unit"}
    })
   }
}
