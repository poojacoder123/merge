import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProductionExpenseComponent } from './report-production-expense.component';

describe('ReportProductionExpenseComponent', () => {
  let component: ReportProductionExpenseComponent;
  let fixture: ComponentFixture<ReportProductionExpenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportProductionExpenseComponent]
    });
    fixture = TestBed.createComponent(ReportProductionExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
