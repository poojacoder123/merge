import { Component } from '@angular/core';
import { AddDepartmentComponent } from '../../shared/add-department/add-department.component';
import { MatDialog } from '@angular/material/dialog';
import { Orderinterface } from 'src/app/admin/interfaces/brands-interFaces';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {
  oty:any = [];
  sub_total:any;
  sum:number = 0

  expenses_list:Orderinterface[] = [
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
   this.expenses_list.map((item: any)=>{
    let new_amount = (item.Qut* item.PRICE)
     this.oty.push(new_amount) 
   return  item.AMOUNT =  new_amount
    })
    

    this.oty.forEach((element:number) => {
      this.sum += element
    });
 }


 expenses(){
  this._diologess.open(AddDepartmentComponent ,{
    data : {
       name : "expenses"

    }
  })
 }
}
