import { Component } from '@angular/core';

@Component({
  selector: 'app-net-purchase-report',
  templateUrl: './net-purchase-report.component.html',
  styleUrls: ['./net-purchase-report.component.scss']
})
export class NetPurchaseReportComponent {
  net_Purchase_report:any = [
    {ACCOUNT_NO: "3445677", ACCOUNT_NAME: "JOSEPH", DEBIT_BALANCE: "0.00", CREDIT_BALANCE: "0.00"},
    {ACCOUNT_NO: "3445677", ACCOUNT_NAME: "JOSEPH", DEBIT_BALANCE: "0.00", CREDIT_BALANCE: "0.00"},
    {ACCOUNT_NO: "3445677", ACCOUNT_NAME: "JOSEPH", DEBIT_BALANCE: "0.00", CREDIT_BALANCE: "0.00"},
    // {ACCOUNT_NO: "3445677", ACCOUNT_NAME: "JOSEPH", DEBIT_BALANCE: "0.00", CREDIT_BALANCE: "0.00"},
    
  ]
}
