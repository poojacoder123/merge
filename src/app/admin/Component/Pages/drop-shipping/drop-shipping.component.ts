import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDropShippingComponent } from '../../shared/add-drop-shipping/add-drop-shipping.component';

@Component({
  selector: 'app-drop-shipping',
  templateUrl: './drop-shipping.component.html',
  styleUrls: ['./drop-shipping.component.scss']
})
export class DropShippingComponent {
  constructor(private _dialog: MatDialog){

  }
  dropShipping:any = [
  {ORDER_DATE:"1-1-2020",	ORDER_NO:"100",	PRODUCT_NAME:"Product A",	PRICE:"100.00",	CUSTOMER_NAME:"John Doe", 	
  PHONE_NO:"+44 12345678",	TRANSACTION_ID:"12345", PAYMENT_METHOD:"Credit Card",	DELIVERY_DATE:"1-1-2020",
  	STATUS:"Pending"},
    {ORDER_DATE:"1-1-2020",	ORDER_NO:"100",	PRODUCT_NAME:"Product A",	PRICE:"100.00",	CUSTOMER_NAME:"John Doe", 	
    PHONE_NO:"+44 12345678",	TRANSACTION_ID:"12345", PAYMENT_METHOD:"Credit Card",	DELIVERY_DATE:"1-1-2020",
      STATUS:"Pending"},
      {ORDER_DATE:"1-1-2020",	ORDER_NO:"100",	PRODUCT_NAME:"Product A",	PRICE:"100.00",	CUSTOMER_NAME:"John Doe", 	
      PHONE_NO:"+44 12345678",	TRANSACTION_ID:"12345", PAYMENT_METHOD:"Credit Card",	DELIVERY_DATE:"1-1-2020",
        STATUS:"Pending"},
]

add_dropshippingModal(){
  this._dialog.open(AddDropShippingComponent ,{
    data : {
       name : "dropshipping"

    }
  })
 }
}
