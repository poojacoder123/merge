import { Component } from '@angular/core';

@Component({
  selector: 'app-stage-production-report',
  templateUrl: './stage-production-report.component.html',
  styleUrls: ['./stage-production-report.component.scss']
})
export class StageProductionReportComponent {
  stage_production_report:any = [
    {DATE: "02-08-2022", PRODUCT_ID : "1011", PRODUCT_NAME: "Product A", CATEGORY: "Electronics", PRICE:"199.99",
  STOCK_QTY: "50"
  },
  {DATE: "02-08-2022", PRODUCT_ID : "1011", PRODUCT_NAME: "Product A", CATEGORY: "Electronics", PRICE:"199.99",
  STOCK_QTY: "50"
  },
  {DATE: "02-08-2022", PRODUCT_ID : "1011", PRODUCT_NAME: "Product A", CATEGORY: "Electronics", PRICE:"199.99",
  STOCK_QTY: "50"
  },
  
  ]
}
