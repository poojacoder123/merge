import { Component } from '@angular/core';

@Component({
  selector: 'app-production-order-report',
  templateUrl: './production-order-report.component.html',
  styleUrls: ['./production-order-report.component.scss']
})
export class ProductionOrderReportComponent {
production_order_report:any = [
  {
    ORDER_ID:"#7678", PRODUCT: "Apple", QTY: "10kg", PRICE: "20.00", ASSIGNED_TO: "JANE JATESON", ORDER_DATE:"20-2-2022",
    DUE_DATE:"20-3-2022",	STATUS:"Pending",	PRIORITY: "HIGH"
  },
  {
    ORDER_ID:"#7678", PRODUCT: "Apple", QTY: "10kg", PRICE: "20.00", ASSIGNED_TO: "JANE JATESON", ORDER_DATE:"20-2-2022",
    DUE_DATE:"20-3-2022",	STATUS:"Pending",	PRIORITY: "HIGH"
  },
  {
    ORDER_ID:"#7678", PRODUCT: "Apple", QTY: "10kg", PRICE: "20.00", ASSIGNED_TO: "JANE JATESON", ORDER_DATE:"20-2-2022",
    DUE_DATE:"20-3-2022",	STATUS:"Pending",	PRIORITY: "HIGH"
  },
]
}
