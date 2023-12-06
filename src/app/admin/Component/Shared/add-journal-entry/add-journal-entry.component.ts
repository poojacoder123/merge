import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-journal-entry',
  templateUrl: './add-journal-entry.component.html',
  styleUrls: ['./add-journal-entry.component.scss']
})
export class AddJournalEntryComponent {
  addjournal !: FormGroup;

}
