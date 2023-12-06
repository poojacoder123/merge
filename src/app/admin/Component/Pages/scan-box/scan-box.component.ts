import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddScanBoxComponent } from '../../shared/add-scan-box/add-scan-box.component';

@Component({
  selector: 'app-scan-box',
  templateUrl: './scan-box.component.html',
  styleUrls: ['./scan-box.component.scss']
})
export class ScanBoxComponent {
constructor(private _dialog:MatDialog){

}

open_modal(){
  this._dialog.open(AddScanBoxComponent ,{
    data : {
       name : "scan-box"

    }
  })
 }
}
