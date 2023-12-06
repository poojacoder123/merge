import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { BrandService } from '../../../services/brand.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { AddBrand } from 'src/app/admin/Store/Actions/Brand.Actions';
import { PurchaseOrderService } from 'src/app/admin/services/purchase-order/purchase-order.service';
import { DevelopmentsService } from 'src/app/admin/services/developments/developments.service';
import { UnitsService } from 'src/app/admin/services/Units/units.service';


@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit{

  // this is a brand form
  brandform !:FormGroup ;
  ckformBrand:boolean = false;

// this is a PurchaseOrderform
  PurchaseOrderform !:FormGroup ;
  onlinestore !:FormGroup ;
  PrepareOrder !:FormGroup ;
  feedbackform !:FormGroup ;
  Expensesform !:FormGroup ;
  ProductionCost !:FormGroup ;
  Compilationitem !:FormGroup ;
  ProductionOrderplan !:FormGroup ;
  addBox !:FormGroup ;
  expensescategory !:FormGroup ;


  AddUnit !:FormGroup ;




  ckPurchaseOrderform:boolean = false;
  newDates:any = new Date()
  countes:number = 1;

  setAmount:number=0;


  ckformCategory:boolean = false;

//Add Department
 AddNewDepartment!:FormGroup;
  ckDep:boolean = false

 constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private _fb : FormBuilder,
    private _brands : BrandService,
    private _toastr: ToastrService,
    public _dilogs : MatDialog,
    private _store : Store,
    private _Purechase : PurchaseOrderService,
    private _Depts : DevelopmentsService,
    private _units : UnitsService
    
  )
  {
    
  }
  ngOnInit(): void {
   this.pageLoaedData();
    this.Add_dep();
    this.PageLoad_Unit();
  }

  pageLoaedData(){
    this.brandform = this._fb.group({
  
      BrandName : ['', Validators.required]
     })




  this.PurchaseOrderform = this._fb.group({
    DueDate : ['',Validators.required],
    PartyAccount : ['',Validators.required],
    PurchaseSalesLedger : ['',Validators.required],
    ProductName : ['', Validators.required],
    Quantity: [null, Validators.required],
    Price : [null, Validators.required],
    Notes : ['',Validators.required],
    Status : ['', Validators.required],
    Warehouse : ['', Validators.required]
  })






if(this.data.id)
{
  this._brands.getById(this.data.id).subscribe(res=>{
  this.brandform.controls['BrandName'].setValue(res.BrandName)
  })
}
}

Create_And_Update_Brand(){
    
  if (this.brandform.invalid) {
    this.ckformBrand = true
    return
  }
  if (this.data.id) {
    this._brands.UpdateBrand(this.data.id,this.brandform.value).subscribe(res=>{
    this._dilogs.closeAll();
    this._toastr.success('Successfull Update a Brand!');
  });
   }
   if (this.brandform.valid && !this.data.id) {
    this._store.dispatch(new AddBrand(this.brandform.value))

}
}


PageLoad_Unit(){
    this.AddUnit = this._fb.group({
      UnitName : ['',Validators.required]
    })
}

create_unit(){
 this._units.Add_Units(this.AddUnit.value).subscribe({
  next : (res) =>{
    this._toastr.success("Successfull Update a Unit!")
    this._dilogs.closeAll();
  },
  error : (err) =>{
    console.error(err , "err in Create Unit")
  }
 })
}


add_order(){

   
    if (this.PurchaseOrderform.invalid) {
      this.ckPurchaseOrderform = true;
      return
    }else{

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
}

ckpice(){
const qut = this.PurchaseOrderform.get('Quantity')?.value;
const price = this.PurchaseOrderform.get('Price')?.value;
  this.setAmount = (qut* price)
}




  Add_dep(){
    this.AddNewDepartment = this._fb.group({
      DepartmentName : ['',Validators.required],
      Status : [null,Validators.required]
    })
  }


  add_departmen(){
    if (this.AddNewDepartment.invalid) {
      this.ckDep = true;
      return
      
    }else{
      this._Depts.Add_department(this.AddNewDepartment.value).subscribe({
        next :(value)=> {
          this._dilogs.closeAll();
          this._toastr.success("Add department")
        },
        error :(err)=> {
          console.log(err , "Err in AddNewDepartment")
        },
    })
    }

   
  }

}
