import { Component } from '@angular/core';
import { AddDepartmentComponent } from '../../shared/add-department/add-department.component';
import { MatDialog } from '@angular/material/dialog';
import { Orderinterface } from 'src/app/admin/interfaces/brands-interFaces';
@Component({
  selector: 'app-prepareorder',
  templateUrl: './prepareorder.component.html',
  styleUrls: ['./prepareorder.component.scss']
})
export class PrepareorderComponent {
  constructor(
    private _diologess : MatDialog
  ){}

  prepare_order(){
    this._diologess.open(AddDepartmentComponent ,{
     
    })
   }

}
