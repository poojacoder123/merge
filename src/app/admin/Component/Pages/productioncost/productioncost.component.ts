import { Component } from '@angular/core';
import { AddDepartmentComponent } from '../../shared/add-department/add-department.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-productioncost',
  templateUrl: './productioncost.component.html',
  styleUrls: ['./productioncost.component.scss']
})
export class ProductioncostComponent {

  constructor(
    private _diologess : MatDialog
  ){}

  ProductionCost(){
    this._diologess.open(AddDepartmentComponent ,{
      data : {
         name : "ProductionCost"
  
      }
    })
   }

}
