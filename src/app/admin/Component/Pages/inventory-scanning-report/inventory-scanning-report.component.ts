import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-scanning-report',
  templateUrl: './inventory-scanning-report.component.html',
  styleUrls: ['./inventory-scanning-report.component.scss']
})
export class InventoryScanningReportComponent {
  inventory_Scanning_Report:any = [
    {SCAN_DATE: "02-08-2022", PRODUCT_ID : "#1001", PRODUCT_NAME: "Sandle", CATEGORY: "Footwear ",
    BRAND:"Columbo", PRICE: "50 ", QTY : "2", AMOUNT : "100", STATUS: "Pending ", SKU: "scanner"          
   },
   {SCAN_DATE: "02-08-2022", PRODUCT_ID : "#1001", PRODUCT_NAME: "Sandle", CATEGORY: "Footwear ",
    BRAND:"Columbo", PRICE: "50 ", QTY : "2", AMOUNT : "100", STATUS: "Pending ", SKU: "scanner"          
   },
   {SCAN_DATE: "02-08-2022", PRODUCT_ID : "#1001", PRODUCT_NAME: "Sandle", CATEGORY: "Footwear ",
    BRAND:"Columbo", PRICE: "50 ", QTY : "2", AMOUNT : "100", STATUS: "Pending ", SKU: "scanner"          
   },
   

  ]
}
