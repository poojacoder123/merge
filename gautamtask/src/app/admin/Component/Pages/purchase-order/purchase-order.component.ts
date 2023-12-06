import { Component, OnInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Orderinterface } from 'src/app/admin/interfaces/brands-interFaces';
import { AddDepartmentComponent } from '../../shared/add-department/add-department.component';
import { AddSuppliersComponent } from '../../shared/add-suppliers/add-suppliers.component';


@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent implements OnInit{


oty:any = [];
sub_total:any;
sum:number = 0
order_list:Orderinterface[] = [
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
  private _diologess : MatDialog
){}

ngOnInit(): void {
 this.set_amount()
}
increment(order:number){
  order +1
 }

 set_amount(){
   this.order_list.map((item: any)=>{
    let new_amount = (item.Qut* item.PRICE)
     this.oty.push(new_amount) 
   return  item.AMOUNT =  new_amount
    })
    
    this.oty.forEach((element:number) => {
      this.sum += element
    });
 }
 add_order(){
  this._diologess.open(AddDepartmentComponent ,{
    data : {
       name : "orders"

    }
  })
 }
}
