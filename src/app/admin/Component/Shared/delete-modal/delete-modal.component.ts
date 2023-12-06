import { Component } from '@angular/core';
import {Dialog, DialogRef, } from '@angular/cdk/dialog';
@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  data!:any
  constructor(
    public dialogRef: DialogRef<string>,
  ){}
}
