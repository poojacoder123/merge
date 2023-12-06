import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-added-distribution-expenses',
  templateUrl: './added-distribution-expenses.component.html',
  styleUrls: ['./added-distribution-expenses.component.scss']
})
export class AddedDistributionExpensesComponent implements OnInit {

  distribution_Expenses_Form !:FormGroup;
  constructor(
    private _fb :FormBuilder,
    public _dilogs : MatDialog,
  ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
