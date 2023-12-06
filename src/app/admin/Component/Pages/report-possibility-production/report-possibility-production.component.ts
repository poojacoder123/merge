import { Component } from '@angular/core';

@Component({
  selector: 'app-report-possibility-production',
  templateUrl: './report-possibility-production.component.html',
  styleUrls: ['./report-possibility-production.component.scss']
})
export class ReportPossibilityProductionComponent {
  report_possibility_production:any = [
    {DATE: "02-08-2022", PRODUCT_NAME : "Product A", LOST_QTY: "10 units", LOST_REASON: "Equipment Malfunction"},
    {DATE: "02-08-2022", PRODUCT_NAME : "Product A", LOST_QTY: "10 units", LOST_REASON: "Equipment Malfunction"},
    {DATE: "02-08-2022", PRODUCT_NAME : "Product A", LOST_QTY: "10 units", LOST_REASON: "Equipment Malfunction"},
  
  ]
}
