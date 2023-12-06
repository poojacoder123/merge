import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseOrderService } from 'src/app/admin/services/purchase-order/purchase-order.service';
@Component({
  selector: 'app-add-purchase-order',
  templateUrl: './add-purchase-order.component.html',
  styleUrls: ['./add-purchase-order.component.scss']
})
export class AddPurchaseOrderComponent implements OnInit {
  PurchaseOrderform !:FormGroup ;

  ckPurchaseOrderform:boolean = false;
  newDates:any = new Date()
  countes:number = 1;
  setAmount:any[] = [];
  disableAmount = true

  constructor(
    private _fb : FormBuilder,
    private _Purechase : PurchaseOrderService,
    private _dilogs : MatDialog
  ){}
  ngOnInit(): void {

  this.PurchaseOrderform = this._fb.group({
    OrderDate : ['',Validators.required],
    PartyAccount : ['',Validators.required],
    PurchaseSalesLedger : ['',Validators.required],
    Notes : ['',Validators.required],
    Status : ['pending', Validators.required],
    newProduct : new FormArray([]),
  })


  }

  get newProduct(): FormArray {
    return this.PurchaseOrderform.get('newProduct') as FormArray;
  }


  add_order(){
     let n = this.newProduct.length -1
      this.newProduct.removeAt(n);
      this._Purechase.Add_Order(this.PurchaseOrderform.value).subscribe({
        next : (res) =>{
          console.log( res )
             this._dilogs.closeAll()
         },
         error : (err)=>{
          console.log('err in post Purchase Order')
          }
      })  
}

addControl() {
  const newControl = this._fb.group({
    duedate: ['', Validators.required],
    productname: ['', Validators.required],
    quantity: ['', Validators.required],
    price: ['', Validators.required],
    warehouse: ['', Validators.required],
    discount : ['', Validators.required],
    tax : ['', Validators.required],
    amount:['', Validators.required]
  });

   this.newProduct.push(newControl);
}

updateAmounts(): void {

  this.newProduct.controls.forEach(item => {
    const quantity = item.get('quantity')?.value
    const price = item.get('price')?.value;
    const calDiscount = item.get('discount')?.value / 100;
    const calTax = item.get('tax')?.value /100
    const amount = quantity * price ;
    const discAmount = amount - calDiscount*amount 
    const taxAmount = discAmount +calTax*discAmount
    item.get('amount')?.setValue(taxAmount);
  });
}
calculateTotalAmount(): number {
  let totalAmount = 0;

  this.newProduct.controls.forEach(item => {
    totalAmount += item.get('amount')?.value;
  });

  return totalAmount;
}

removeControl(index: number) {
  this.newProduct.removeAt(index);
}

}