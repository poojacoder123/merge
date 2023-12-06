import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUngroupCompilationItemsComponent } from '../../shared/add-ungroup-compilation-items/add-ungroup-compilation-items.component';

@Component({
  selector: 'app-ungroup-compilation-items',
  templateUrl: './ungroup-compilation-items.component.html',
  styleUrls: ['./ungroup-compilation-items.component.scss']
})
export class UngroupCompilationItemsComponent {

  constructor( private _dialog : MatDialog){
   
  }
  ungroup_compilation_item:any = [
    {DATE: "02-08-2022", ITEM_NAME : "ITEM 1", NOTE : "Description of ITEM 1", SUPPLIER: "supplier X", UNIT: "3",
   QUANTITY:"", COST_PER_UNIT: "2.50"},
   {DATE: "02-08-2022", ITEM_NAME : "ITEM 1", NOTE : "Description of ITEM 1", SUPPLIER: "supplier X", UNIT: "3",
   QUANTITY:"", COST_PER_UNIT: "2.50"},
   {DATE: "02-08-2022", ITEM_NAME : "ITEM 1", NOTE : "Description of ITEM 1", SUPPLIER: "supplier X", UNIT: "3",
   QUANTITY:"", COST_PER_UNIT: "2.50"},
  ]

  distribution_open_modal(){
    this._dialog.open(AddUngroupCompilationItemsComponent,{
       data : {name : 'Distribution Expenses'}
    }) 
   
   }

}
