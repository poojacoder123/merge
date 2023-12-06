import { Component } from '@angular/core';

@Component({
  selector: 'app-net-sales-report',
  templateUrl: './net-sales-report.component.html',
  styleUrls: ['./net-sales-report.component.scss']
})
export class NetSalesReportComponent {
  net_sales_report:any = [
    
    {ACCOUNT_NO: "3445677", ACCOUNT_NAME: "JOSEPH", DEBIT_BALANCE: "0.00", CREDIT_BALANCE: "0.00"},
    {ACCOUNT_NO: "3445677", ACCOUNT_NAME: "JOSEPH", DEBIT_BALANCE: "0.00", CREDIT_BALANCE: "0.00"},
    {ACCOUNT_NO: "3445677", ACCOUNT_NAME: "JOSEPH", DEBIT_BALANCE: "0.00", CREDIT_BALANCE: "0.00"},
    // {ACCOUNT_NO: "3445677", ACCOUNT_NAME: "JOSEPH", DEBIT_BALANCE: "0.00", CREDIT_BALANCE: "0.00"},
    
  ]
}
