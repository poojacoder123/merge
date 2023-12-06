import { Component } from '@angular/core';

@Component({
  selector: 'app-report-production-costs',
  templateUrl: './report-production-costs.component.html',
  styleUrls: ['./report-production-costs.component.scss']
})
export class ReportProductionCostsComponent {
  report_production_costs:any = [
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
