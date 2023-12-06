import { Component } from '@angular/core';

@Component({
  selector: 'app-production-plans-report',
  templateUrl: './production-plans-report.component.html',
  styleUrls: ['./production-plans-report.component.scss']
})
export class ProductionPlansReportComponent {

  production_plans_report : any = [
    {
    PLAN_ID : "#111212", PRODUCT_ID : "67677", PRODUCT_NAME: "PRODUCT C", QTY : 1000, START_DATE: 7-11-2023, 
    END_DATE: "7-11-2023", STATUS:"PLANNED",PRIORITY: "MEDIUM", ASSIGNED_TO : "Department" 
    },
    {
      PLAN_ID : "#111212", PRODUCT_ID : "67677", PRODUCT_NAME: "PRODUCT C", QTY : 1000, START_DATE: 7-11-2023, 
      END_DATE: "7-11-2023", STATUS:"PLANNED",PRIORITY: "MEDIUM", ASSIGNED_TO : "Department" 
      },
      {
        PLAN_ID : "#111212", PRODUCT_ID : "67677", PRODUCT_NAME: "PRODUCT C", QTY : 1000, START_DATE: 7-11-2023, 
        END_DATE: "7-11-2023", STATUS:"PLANNED",PRIORITY: "MEDIUM", ASSIGNED_TO : "Department" 
        },
  ]


  }

