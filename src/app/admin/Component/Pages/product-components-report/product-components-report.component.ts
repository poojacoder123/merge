import { Component } from '@angular/core';

@Component({
  selector: 'app-product-components-report',
  templateUrl: './product-components-report.component.html',
  styleUrls: ['./product-components-report.component.scss']
})
export class ProductComponentsReportComponent {

  product_components:any = [
    {DATE: "02-08-2022", ITEM_ID : "1", COMPONENT_NAME: "Component A", QTY: "5", UNIT: "pcs",
    SUPPLIER:"Supplier X", COST_PER_UNIT: "12.50", TOTAL_COST : "12.50"         
   },
   {DATE: "02-08-2022", ITEM_ID : "1", COMPONENT_NAME: "Component A", QTY: "5", UNIT: "pcs",
    SUPPLIER:"Supplier X", COST_PER_UNIT: "12.50", TOTAL_COST : "12.50"         
   },
   {DATE: "02-08-2022", ITEM_ID : "1", COMPONENT_NAME: "Component A", QTY: "5", UNIT: "pcs",
    SUPPLIER:"Supplier X", COST_PER_UNIT: "12.50", TOTAL_COST : "12.50"         
   },
   

  ]
}
