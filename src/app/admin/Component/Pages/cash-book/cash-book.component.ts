import { Component } from '@angular/core';

@Component({
  selector: 'app-cash-book',
  templateUrl: './cash-book.component.html',
  styleUrls: ['./cash-book.component.scss']
})
export class CashBookComponent {
  cashBook:any = [
    {PARTICULARS: "Golden Company limited", VOUHERS_TYPE: "Receipt", VOUHERS_NO: "12344", DEBIT: "40.00",CREDIT:"199.99",
  DATE: "02-02-2020"
  },
  {PARTICULARS: "Golden Company limited", VOUHERS_TYPE: "Receipt", VOUHERS_NO: "12344", DEBIT: "40.00",CREDIT:"199.99",
  DATE: "02-02-2020"
  },
  {PARTICULARS: "Golden Company limited", VOUHERS_TYPE: "Receipt", VOUHERS_NO: "12344", DEBIT: "40.00",CREDIT:"199.99",
  DATE: "02-02-2020"
  },
 
  
  ]
}
