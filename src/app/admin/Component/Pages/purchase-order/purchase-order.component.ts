import { Component, OnInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { AddPurchaseOrderComponent } from '../../shared/add-purchase-order/add-purchase-order.component';
import { PurchaseOrderService } from 'src/app/admin/services/purchase-order/purchase-order.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent implements OnInit{


setindex:string = '#show';
order_list:any[] = []
constructor(
  private _diologess : MatDialog,
  private _Purchase : PurchaseOrderService,
  private _routes: Router
){}

ngOnInit(): void {
 this.set_amount()
}


 set_amount(){
    this._Purchase.Get_Order().subscribe({
      next :(res)=> {
        this.order_list = res   
     
      },
      error :(err) =>{
        console.log('err in get PurchaseOrder',err)
      },
    })




 }
 open_Model_order(){
  this._diologess.open(AddPurchaseOrderComponent)
 }
 viewPage(order:any){
  let id = order._id
  this._routes.navigate(['/admin/purchaseorder/view/'+id])
 }
}
