import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddJournalEntryComponent } from '../../shared/add-journal-entry/add-journal-entry.component';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.scss']
})
export class JournalEntryComponent {
  
  JOURNAL_ENTRY:any = [
    			
    {JOURNAL_NO: "#34443", PARTICULARS: "Apple Apple", DEBIT: "1000", CREDIT: "500",
     DATE_OF_JOINING	: "1-1-2020" },
     {JOURNAL_NO: "#34443", PARTICULARS: "Apple Apple", DEBIT: "1000", CREDIT: "500",
     DATE_OF_JOINING	: "1-1-2020" },
     {JOURNAL_NO: "#34443", PARTICULARS: "Apple Apple", DEBIT: "1000", CREDIT: "500",
     DATE_OF_JOINING	: "1-1-2020" },
    
   

  ]
  constructor(
    private _diologess : MatDialog
  ){}




    add_journal_entryModal(){
     this._diologess.open(AddJournalEntryComponent ,{
       data : {
          name : "journal entry"
   
       }
     })
    }
}
