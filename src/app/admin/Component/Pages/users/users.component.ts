import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDepartmentComponent } from '../../shared/add-department/add-department.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
 ELEMENT_DATA = [
    { name: 'deepak patidar', phone_number : '992607392' , address: '62504 Veum Plaza, Port Josue, CT 22015', role:'general manager',},
    { name: 'John Foster' ,   phone_number : '3455676324',address: '83537 Cherri Junction, Jakubowskiburgh, DE 96676', role:'general manager',},
    { name: 'jaya yadev ',    phone_number : '802345093', address: 'Suite 769 38485 Torp Orchard, Lake Dallas, GA 32227-1028', role:'general manager', },
    { name: 'Adams, Ansel' ,  phone_number : '4349813749', address: 'Suite 147 8435 Reba Forks, East Mathilda, WI 31127', role:'general manager', },
    { name: 'Whitman, Walt' , phone_number : '298498455',address: '911 Boyle Road, New Xenia, MT 16765', role:'general manager', }
  ];
constructor(
  private _dioglag : MatDialog
){}
  add_users(){
    this._dioglag.open(AddDepartmentComponent,{
      data :{
        name : "Users"
      }
    })

  }
}
