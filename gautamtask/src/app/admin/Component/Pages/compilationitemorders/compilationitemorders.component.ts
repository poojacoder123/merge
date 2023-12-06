import { Component } from '@angular/core';
import { AddDepartmentComponent } from '../../shared/add-department/add-department.component';
import { MatDialog } from '@angular/material/dialog';
import { Orderinterface } from 'src/app/admin/interfaces/brands-interFaces';

@Component({
  selector: 'app-compilationitemorders',
  templateUrl: './compilationitemorders.component.html',
  styleUrls: ['./compilationitemorders.component.scss']
})
export class CompilationitemordersComponent {
  constructor(
    private _diologess : MatDialog
  ){}

  CompilationItem(){
    this._diologess.open(AddDepartmentComponent ,{
      data : {
         name : "CompilationItem"
  
      }
    })
   }
}
