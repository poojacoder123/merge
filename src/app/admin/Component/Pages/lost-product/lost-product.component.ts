import { Component } from '@angular/core';

@Component({
  selector: 'app-lost-product',
  templateUrl: './lost-product.component.html',
  styleUrls: ['./lost-product.component.scss']
})
export class LostProductComponent {

  lost_production_report:any = [
    {DATE: "02-08-2022", PRODUCT_NAME : "Product A", LOST_QTY: "10 units", LOST_REASON: "Equipment Malfunction"},
    {DATE: "02-08-2022", PRODUCT_NAME : "Product A", LOST_QTY: "10 units", LOST_REASON: "Equipment Malfunction"},
    {DATE: "02-08-2022", PRODUCT_NAME : "Product A", LOST_QTY: "10 units", LOST_REASON: "Equipment Malfunction"},
  
  ]
}
