import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOutOfStockReportComponent } from '../../shared/add-out-of-stock-report/add-out-of-stock-report.component';


@Component({
  selector: 'app-out-of-stock-report',
  templateUrl: './out-of-stock-report.component.html',
  styleUrls: ['./out-of-stock-report.component.scss']
})
export class OutOfStockReportComponent {
  oty:any = [];
  sub_total:any;
  sum:number = 0
  order_list:any = [
    {LAST_SALES_DATE: "02-08-2022", LAST_PURCHASE_DATE : "07-10-2023", ID : "#1001", PRODUCT_NAME: "Sandle", PRICE: "50.00 ",
    OPENING_QTY:"50 KG", PURCHASE_QTY: "150 KG", SALE_QTY : "175 KG", CURRENT_STOCK : "25 KG", STOCK_AMOUNT: "100.00 ", SKU: "scanner"          
   },
   {LAST_SALES_DATE: "02-08-2022", LAST_PURCHASE_DATE : "07-10-2023", ID : "#1001", PRODUCT_NAME: "Sandle", PRICE: "50.00 ",
    OPENING_QTY:"50 KG", PURCHASE_QTY: "150 KG", SALE_QTY : "175 KG", CURRENT_STOCK : "25 KG", STOCK_AMOUNT: "100.00 ", SKU: "scanner"          
   },
   {LAST_SALES_DATE: "02-08-2022", LAST_PURCHASE_DATE : "07-10-2023", ID : "#1001", PRODUCT_NAME: "Sandle", PRICE: "50.00 ",
    OPENING_QTY:"50 KG", PURCHASE_QTY: "150 KG", SALE_QTY : "175 KG", CURRENT_STOCK : "25 KG", STOCK_AMOUNT: "100.00 ", SKU: "scanner"          
   }

  ]
  constructor(
    private _diologess : MatDialog
  ){}




    add_outOfStockModal(){
     this._diologess.open(AddOutOfStockReportComponent ,{
       data : {
          name : "orders"
   
       }
     })
    }
}
