import { Component } from '@angular/core';
import { Validators , FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { VenderService } from 'src/app/admin/services/vender/vender.service';
@Component({
  selector: 'app-add-vender',
  templateUrl: './add-vender.component.html',
  styleUrls: ['./add-vender.component.scss']
})
export class AddVenderComponent {
  ckfiest:boolean = false
  cksecond:boolean =false
  ckthird:boolean =false
  isLinear = true;
  allData:any;
  constructor(
    private _fb : FormBuilder,
    private _vendor : VenderService,
    public _tos : ToastrService,
    private _diog : MatDialog
  ){}
  firstFormGroup = this._fb.group({
    VendorName: ['', Validators.required],
    VendorContactNo: ['', Validators.required],
    VendorEmail: ['', Validators.required],
    VendorTaxNumber: ['', Validators.required],
  });

  secondFormGroup = this._fb.group({
    BillingName: ['', Validators.required],
    BillingContact: ['', Validators.required],
    BillingCity: ['', Validators.required],
    BillingState: ['', Validators.required],
    BillingCountry: ['', Validators.required],
    BillingZipCode: ['', Validators.required],
    BillingAddress: ['', Validators.required],
  });

  thirdFormGroup = this._fb.group({
    ShippingName: ['', Validators.required],
    ShippingContactNo: ['', Validators.required],
    ShippingCity: ['', Validators.required],
    ShippingState: ['', Validators.required],
    ShippingCountry: ['', Validators.required],
    ShippingZipCode: ['', Validators.required],
    ShippingAddress: ['', Validators.required],
  });



  to_next(){
 
    if (this.firstFormGroup.invalid ) {
      this.ckfiest = true
      return
    } 
  }
  
  to_next2nd(){
  if (this.secondFormGroup.invalid ) {
      this.cksecond = true
      return
    } 
  }
  
  to_next3nd(){

    if (this.thirdFormGroup.invalid ) {
        this.ckthird = true
        return
      }
      else{
        this.allData = {...this.firstFormGroup.value, ...this.secondFormGroup.value, ...this.thirdFormGroup.value}
        this._vendor.Add_Vendor(this.allData).subscribe({
          next :(res)=> {
            this._tos.success("Add Vendor Successful");
            this._diog.closeAll();
            console.log(res)
          },
          error :(err) =>{
            console.log('err in Add Vendor')
          },
        })
      } 

  }  
 
}
