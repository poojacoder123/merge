import { Component } from '@angular/core';

@Component({
  selector: 'app-net-transfer-report',
  templateUrl: './net-transfer-report.component.html',
  styleUrls: ['./net-transfer-report.component.scss']
})
export class NetTransferReportComponent {
  net_transfer_report:any = [
    {TRANSACTION_DATE: "1-1-2020", FROM_LOCATION: "LOCATION 1", TO_LOCATION: "location 2", AMOUNT: "100.00"},
    {TRANSACTION_DATE: "1-1-2020", FROM_LOCATION: "LOCATION 1", TO_LOCATION: "location 2", AMOUNT: "100.00"},
    {TRANSACTION_DATE: "1-1-2020", FROM_LOCATION: "LOCATION 1", TO_LOCATION: "location 2", AMOUNT: "100.00"},
    
  ]
}
