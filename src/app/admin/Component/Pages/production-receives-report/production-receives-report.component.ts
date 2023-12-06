import { Component } from '@angular/core';

@Component({
  selector: 'app-production-receives-report',
  templateUrl: './production-receives-report.component.html',
  styleUrls: ['./production-receives-report.component.scss']
})
export class ProductionReceivesReportComponent {

  production_receives_report:any = [
    {RECEIPT_ID: "#878790", ORDER_ID : "754883", ITEM_ID: "#98473", PRODUCT_NAME: "Product A ",
    QTY:"1000", RECEIVED_DATE: "7-11-2023 ", RECEIVED_BY : "John", STATUS : "Received"          
   },
   {RECEIPT_ID: "#878790", ORDER_ID : "754883", ITEM_ID: "#98473", PRODUCT_NAME: "Product A ",
   QTY:"1000", RECEIVED_DATE: "7-11-2023 ", RECEIVED_BY : "John", STATUS : "Received"          
  },
  {RECEIPT_ID: "#878790", ORDER_ID : "754883", ITEM_ID: "#98473", PRODUCT_NAME: "Product A ",
  QTY:"1000", RECEIVED_DATE: "7-11-2023 ", RECEIVED_BY : "John", STATUS : "Received"          
 }
   
  ]
}
