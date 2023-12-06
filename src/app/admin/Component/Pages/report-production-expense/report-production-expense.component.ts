import { Component } from '@angular/core';

@Component({
  selector: 'app-report-production-expense',
  templateUrl: './report-production-expense.component.html',
  styleUrls: ['./report-production-expense.component.scss']
})
export class ReportProductionExpenseComponent {
  report_production_expense:any = [
    {DATE: "02-08-2022", CATEGORY : "Food", DESCRIPTION: "Breakfast", AMOUNT: "815", TOTAL:"1200",
  STATUS: " Approved", PAYMENT_STATUS : "Paid"
  },
  {DATE: "02-08-2022", CATEGORY : "Food", DESCRIPTION: "Breakfast", AMOUNT: "815", TOTAL:"1200",
  STATUS: " Approved", PAYMENT_STATUS : "Paid"
  },
  {DATE: "02-08-2022", CATEGORY : "Food", DESCRIPTION: "Breakfast", AMOUNT: "815", TOTAL:"1200",
  STATUS: " Approved", PAYMENT_STATUS : "Paid"
  },
  
  
  ]
}
