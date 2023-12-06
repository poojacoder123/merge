import { Component } from '@angular/core';

@Component({
  selector: 'app-net-expense',
  templateUrl: './net-expense.component.html',
  styleUrls: ['./net-expense.component.scss']
})
export class NetExpenseComponent {
  net_expense:any = [
    {DATE: "02-08-2022", CATEGORY : "Utilities", NOTE: "electricity bills", AMOUNT: "200.00", PAYMENT_METHOD:"credit card",
  VENDOR: "Power Company", RECEIPT_NO: "11223344", EMPLOYEES: "Operating Expense"
  },
  {DATE: "02-08-2022", CATEGORY : "Utilities", NOTE: "electricity bills", AMOUNT: "200.00", PAYMENT_METHOD:"credit card",
  VENDOR: "Power Company", RECEIPT_NO: "11223344", EMPLOYEES: "Operating Expense"
  },
  {DATE: "02-08-2022", CATEGORY : "Utilities", NOTE: "electricity bills", AMOUNT: "200.00", PAYMENT_METHOD:"credit card",
  VENDOR: "Power Company", RECEIPT_NO: "11223344", EMPLOYEES: "Operating Expense"
  }, 
  ]
}
