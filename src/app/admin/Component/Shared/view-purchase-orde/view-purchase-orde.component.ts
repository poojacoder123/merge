import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  tap } from 'rxjs';
import { PurchaseOrderService } from 'src/app/admin/services/purchase-order/purchase-order.service';

@Component({
  selector: 'app-view-purchase-orde',
  templateUrl: './view-purchase-orde.component.html',
  styleUrls: ['./view-purchase-orde.component.scss']
})
export class ViewPurchaseOrdeComponent implements OnInit {
id :any;
dataSource :any[] = []
constructor(
  private _Purchorder : PurchaseOrderService,
  private _Act : ActivatedRoute
){}

  ngOnInit(): void {
    this.id = this._Act.snapshot.paramMap.get('id')
   
    this._Purchorder.Get_by_id(this.id).subscribe({
      next : (res) =>{
      this.dataSource = res
 
      },
      error :(err)=> {
        
      },
    })
  }

}
