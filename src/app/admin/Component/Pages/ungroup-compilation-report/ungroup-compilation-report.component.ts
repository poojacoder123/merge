import { Component } from '@angular/core';

@Component({
  selector: 'app-ungroup-compilation-report',
  templateUrl: './ungroup-compilation-report.component.html',
  styleUrls: ['./ungroup-compilation-report.component.scss']
})
export class UngroupCompilationReportComponent {
  ungroupCompilation:any = [
    {DATE: "02-08-2022", ITEM_NAME : " Item 1", NOTE: "description of item A", SUPPLIER: "supplier X", UNIT: "4",
    QTY:"34", COST_PER_UNIT: "12.50"},
    {DATE: "02-08-2022", ITEM_NAME : " Item 1", NOTE: "description of item A", SUPPLIER: "supplier X", UNIT: "4",
    QTY:"34", COST_PER_UNIT: "12.50"},
    {DATE: "02-08-2022", ITEM_NAME : " Item 1", NOTE: "description of item A", SUPPLIER: "supplier X", UNIT: "4",
    QTY:"34", COST_PER_UNIT: "12.50"},   
  ]
}
