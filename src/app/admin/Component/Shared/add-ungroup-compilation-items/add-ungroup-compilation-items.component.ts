import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-ungroup-compilation-items',
  templateUrl: './add-ungroup-compilation-items.component.html',
  styleUrls: ['./add-ungroup-compilation-items.component.scss']
})
export class AddUngroupCompilationItemsComponent implements OnInit {
  ungroupComplilationItems_Form !:FormGroup;

  constructor(private _fb :FormBuilder,
    public _dilogs : MatDialog){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
