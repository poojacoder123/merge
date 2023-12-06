import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDepartmentComponent } from '../../shared/add-department/add-department.component';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent {
  ELEMENT_DATA = [
    { name: 'deepak patidar', phone_number : '992607392' , address: '62504 Veum Plaza, Port Josue, CT 22015', email:'dirego7841@rdluxe.com',},
    { name: 'John Foster' ,   phone_number : '3455676324',address: '83537 Cherri Junction, Jakubowskiburgh, DE 96676', email:'dirego7841@rdluxe.com',},
    { name: 'jaya yadev ',    phone_number : '802345093', address: 'Suite 769 38485 Torp Orchard, Lake Dallas, GA 32227-1028', email:'dirego7841@rdluxe.com', },
    { name: 'Adams, Ansel' ,  phone_number : '4349813749', address: 'Suite 147 8435 Reba Forks, East Mathilda, WI 31127', email:'dirego7841@rdluxe.com', },
    { name: 'Whitman, Walt' , phone_number : '298498455',address: '911 Boyle Road, New Xenia, MT 16765', email:'dirego7841@rdluxe.com', }
  
  ];
constructor(
  private _dig :MatDialog
){

}
  add_vendor(){
    this._dig.open(AddDepartmentComponent, {
      data : {
        name : "Vendor"
      }
    })
  }

}
