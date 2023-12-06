import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { allsuppliers } from 'src/app/admin/interfaces/brands-interFaces';
import { AddSuppliersComponent } from '../../shared/add-suppliers/add-suppliers.component';
// import { AddSuppliersComponent } from '../../shared/add-suppliers/add-suppliers.component';


const ELEMENT_DATA: allsuppliers[] = [
  { name: 'deepak patidar', phone_number : '992607392' , address: '62504 Veum Plaza, Port Josue, CT 22015', email:'D@gmail.com',},
  { name: 'John Foster' ,   phone_number : '3455676324',address: '83537 Cherri Junction, Jakubowskiburgh, DE 96676', email:'John@gmail.com',},
  { name: 'jaya yadev ',    phone_number : '802345093', address: 'Suite 769 38485 Torp Orchard, Lake Dallas, GA 32227-1028', email:'jaya@gmail.com', },
  { name: 'Adams, Ansel' ,  phone_number : '4349813749', address: 'Suite 147 8435 Reba Forks, East Mathilda, WI 31127', email:'Adams@gmail.com', },
  { name: 'Whitman, Walt' , phone_number : '298498455',address: '911 Boyle Road, New Xenia, MT 16765',  email:'Whitman@gmail.com', }

];


@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  dataSource :any = [];
  displayedColumns: string[] = ['_id', 'name','email' ,'phone_number', 'status','Action',];

  
  constructor(
    public _dialog : MatDialog
  ){}
  
  ngOnInit(): void {
    this.dataSource = ELEMENT_DATA
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

   add_Suppliers(){
     this._dialog.open(AddSuppliersComponent);
   }
}
