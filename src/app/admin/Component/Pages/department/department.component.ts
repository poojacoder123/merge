import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import { AddDepartmentComponent } from '../../shared/add-department/add-department.component';
import { MatDialog } from '@angular/material/dialog';


import { DevelopmentsService } from 'src/app/admin/services/developments/developments.service';
import { Select, Store } from '@ngxs/store';
import { DepartmentState } from 'src/app/admin/Store/States/Department.State';
import { developments } from 'src/app/admin/interfaces/brands-interFaces';
import { Observable, Subscription } from 'rxjs';
import { Get_Departments } from 'src/app/admin/Store/Actions/Department.Actions';
import { DeleteModalComponent } from '../../shared/delete-modal/delete-modal.component';
import {Dialog} from '@angular/cdk/dialog'






@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  dataSource :any = [];
 
  displayedColumns: string[] = ['_id', 'Dept_No', 'Department_NAME','product', '#products', 'status', 'Action', 'move'];
  new_color:any = [];
  loading:boolean = false;
  @Select(DepartmentState.getDepartmentList) DepartmentList$!:Observable<developments[]>
  unsubrid!:Subscription;
    // ngxs for redux to getdata for status for loaded brand 
  @Select(DepartmentState.DepartmentLoaded) DepartmentLoaded$!: Observable<boolean>  
  unloaded!:Subscription;

constructor(
 public _dialog: MatDialog,
 private _Delp : DevelopmentsService,
 private _store : Store,
 public _log : Dialog
){}

  ngOnInit(): void {
    this.loading = true;
    this.alldataGet();
    this.loading = false;

this.DepartmentLoaded$.subscribe(loaded=>{
if (!loaded) {
  this._store.dispatch(new Get_Departments());
  }
})
    
    
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  alldataGet(){

    this.DepartmentList$.subscribe({
      next :(res) => {
        this.dataSource = res;
        for(let c = 0; c<= this.dataSource.length; c++){
          const red = Math.floor(Math.random() * 256);
          const green = Math.floor(Math.random() * 256);
          const blue = Math.floor(Math.random() * 256);
          this.new_color[c] = `rgb(${red},${green},${blue})`;
        }
      },
      error : (err) =>{
        console.log(err ,"Err in Get_department ")
      }
    })
  }
  open_modal(){
 this._dialog.open(AddDepartmentComponent,{
    data : {name : 'Department'}
 }) 

  }

  delete_depat(){
    const dialogRef = this._log.open(DeleteModalComponent);
  }




}



