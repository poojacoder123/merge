import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSummaryReportComponent } from './stock-summary-report.component';

describe('StockSummaryReportComponent', () => {
  let component: StockSummaryReportComponent;
  let fixture: ComponentFixture<StockSummaryReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockSummaryReportComponent]
    });
    fixture = TestBed.createComponent(StockSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
