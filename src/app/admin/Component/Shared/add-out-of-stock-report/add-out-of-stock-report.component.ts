import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-add-out-of-stock-report',
  templateUrl: './add-out-of-stock-report.component.html',
  styleUrls: ['./add-out-of-stock-report.component.scss']
})
export class AddOutOfStockReportComponent implements OnInit{
  outOfStock_Form !:FormGroup;
  constructor(
    private _fb :FormBuilder,
    public _dilogs : MatDialog,
   ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
