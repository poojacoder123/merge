import { Component } from '@angular/core';

@Component({
  selector: 'app-variances-production-qualities-report',
  templateUrl: './variances-production-qualities-report.component.html',
  styleUrls: ['./variances-production-qualities-report.component.scss']
})
export class VariancesProductionQualitiesReportComponent {
  variances_production_qualities_report:any = [
    {DATE: "02-08-2022", ITEM : "Item A", QTY: "10 units", UNIT_COST: "5.00", MATERIAL_COST:"20.00",
  LABOR_COST: "20.00", OVERHEAD_COST: "5.00", TOTAL_COST: "40.00"
  },
  {DATE: "02-08-2022", ITEM : "Item A", QTY: "10 units", UNIT_COST: "5.00", MATERIAL_COST:"20.00",
  LABOR_COST: "20.00", OVERHEAD_COST: "5.00", TOTAL_COST: "40.00"
  },
  {DATE: "02-08-2022", ITEM : "Item A", QTY: "10 units", UNIT_COST: "5.00", MATERIAL_COST:"20.00",
  LABOR_COST: "20.00", OVERHEAD_COST: "5.00", TOTAL_COST: "40.00"
  }
  
  
  ]
}
