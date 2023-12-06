import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDepartmentComponent } from '../../shared/add-department/add-department.component';
@Component({
  selector: 'app-expensescategory',
  templateUrl: './expensescategory.component.html',
  styleUrls: ['./expensescategory.component.scss']
})
export class ExpensescategoryComponent {
  ELEMENT_DATA :any[]= [
    { name: 'Office Supplies', description : 'Expenses for office stationery and supplies' , },
    { name: 'Rent' , description : 'Monthly rent payments',},
    { name: 'Office Supplies', description : 'Expenses for office stationery and supplies', },
  ];
constructor(
  private _dioglag : MatDialog
){}
  add_expensescategory(){
    this._dioglag.open(AddDepartmentComponent,{
      data :{
        name : "Expensescategory"
      }
    })
  }
}
