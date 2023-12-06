import { Component } from '@angular/core';

@Component({
  selector: 'app-outstading-report',
  templateUrl: './outstading-report.component.html',
  styleUrls: ['./outstading-report.component.scss']
})
export class OutstadingReportComponent {
  net_sales_report:any = [
   
    {SALES_INVOICE_NO: "#7676", CREDITORS_ACCOUNT: "123456789", OPENING_AMOUNT: "20.00", PENDING_AMOUNT: "100.00",
  DUE_ON:"2-2-2020", DATE:"2-2-2020"},
  {SALES_INVOICE_NO: "#7676", CREDITORS_ACCOUNT: "123456789", OPENING_AMOUNT: "20.00", PENDING_AMOUNT: "100.00",
  DUE_ON:"2-2-2020", DATE:"2-2-2020"},
  {SALES_INVOICE_NO: "#7676", CREDITORS_ACCOUNT: "123456789", OPENING_AMOUNT: "20.00", PENDING_AMOUNT: "100.00",
  DUE_ON:"2-2-2020", DATE:"2-2-2020"},
   
   
  ]
}
