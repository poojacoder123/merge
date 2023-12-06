import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from 'src/app/admin/services/purchase-order/purchase-order.service';

@Component({
  selector: 'app-purchase-pending-report',
  templateUrl: './purchase-pending-report.component.html',
  styleUrls: ['./purchase-pending-report.component.scss']
})
export class PurchasePendingReportComponent implements OnInit {
  report :any[] = []
constructor(
  private _purchase : PurchaseOrderService
){}
  ngOnInit(): void {

  this._purchase.Order_panding().subscribe({
    next :(res)=> {
    this.report = res
    },
    error :(err) =>{
      console.log('err in a purchase Order Panding',err )
    },
  })  
  }
}
