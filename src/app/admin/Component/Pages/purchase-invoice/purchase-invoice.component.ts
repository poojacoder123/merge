import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDepartmentComponent } from '../../shared/add-department/add-department.component';

@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.scss']
})
export class PurchaseInvoiceComponent {
  oty:any = [];
  sub_total:any;
  sum:number = 0
  Bill_Entry:any[] = [
    {
      ORDER_NO : "#7678",
      PRODUCT : "Apple,Apple,Apple,Apple",
      PRICE : 100,
      AMOUNT : 10000000 ,
      Qut : 34,
      ORDER_DATE : "02-08-2022"
    },
    {
      ORDER_NO : "#7678",
      PRODUCT : "Apple,Apple,Apple,Apple",
      PRICE : 10,
      AMOUNT : 1000000 ,
      Qut : 40,
      ORDER_DATE : "02-08-2022"
    },
    {
      ORDER_NO : "#7678",
      PRODUCT : "Apple,Apple,Apple,Apple",
      PRICE : 5,
      AMOUNT : 1000000 ,
      Qut : 34,
      ORDER_DATE : "02-08-2022"
    }
  ]
  
  constructor(
    private _diolog : MatDialog
  ){

   }


   Add_invoice(){
    this._diolog.open(AddDepartmentComponent,{
      data : {
        name : "Purchase-invoice"
      }
    })
   }
}
