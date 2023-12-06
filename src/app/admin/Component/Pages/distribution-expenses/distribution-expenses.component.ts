import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddedDistributionExpensesComponent } from '../../shared/added-distribution-expenses/added-distribution-expenses.component';


@Component({
  selector: 'app-distribution-expenses',
  templateUrl: './distribution-expenses.component.html',
  styleUrls: ['./distribution-expenses.component.scss']
})
export class DistributionExpensesComponent {

  constructor(
    public _dialog: MatDialog
   ){}

  order_list:any = [
    {DATE: "02-08-2022", CATEGORY : "Logistics", NOTE : "Description of shipping expenses", AMOUNT: "500", PAYMENT_METHOD: "Credit Card",
   STATUS:"Pending", RECEIPT: "View Receipt"},
   {DATE: "02-08-2022", CATEGORY : "Logistics", NOTE : "Description of shipping expenses", AMOUNT: "500", PAYMENT_METHOD: "Credit Card",
   STATUS:"Pending", RECEIPT: "View Receipt"},
   {DATE: "02-08-2022", CATEGORY : "Logistics", NOTE : "Description of shipping expenses", AMOUNT: "500", PAYMENT_METHOD: "Credit Card",
   STATUS:"Pending", RECEIPT: "View Receipt"},
  ]

  distribution_open_modal(){
    this._dialog.open(AddedDistributionExpensesComponent,{
       data : {name : 'Distribution Expenses'}
    }) 
   
   }


}
 