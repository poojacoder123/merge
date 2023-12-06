import { Component } from '@angular/core';
import { AddDepartmentComponent } from '../../shared/add-department/add-department.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addbox',
  templateUrl: './addbox.component.html',
  styleUrls: ['./addbox.component.scss']
})
export class AddboxComponent {

  constructor(
    private _diologess : MatDialog
  ){}

  addbox(){
    this._diologess.open(AddDepartmentComponent ,{
      data : {
         name : "addbox"
  
      }
    })
   }

}
