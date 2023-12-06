import { Component } from '@angular/core';
import { AddDepartmentComponent } from '../../shared/add-department/add-department.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-productionorderplan',
  templateUrl: './productionorderplan.component.html',
  styleUrls: ['./productionorderplan.component.scss']
})
export class ProductionorderplanComponent {
  
  constructor(
    private _diologess : MatDialog
  ){}


  ProductionOrderPlan(){
    this._diologess.open(AddDepartmentComponent ,{
      data : {
         name : "Productionorderplan"
  
      }
    })
   }

}
