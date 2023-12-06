import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddVenderComponent } from '../../shared/add-vender/add-vender.component';
import { VenderService } from 'src/app/admin/services/vender/vender.service';
import { venders } from 'src/app/admin/interfaces/brands-interFaces';



@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements  OnInit {
  ELEMENT_DATA:venders[] = []
  

constructor(
  private _dig :MatDialog,
  private _vender : VenderService,

){ }
  ngOnInit(): void {
   this.Page_load_data();
  }
Page_load_data(){
  this._vender.Get_Vender().subscribe({
    next :(res) => {
      this.ELEMENT_DATA = res;
  
    },
    error: (err) =>{
      
    },
  })
}

  add_vendor(){
    this._dig.open(AddVenderComponent)
  }
  
}
