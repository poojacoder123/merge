import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfStockReportComponent } from './out-of-stock-report.component';

describe('OutOfStockReportComponent', () => {
  let component: OutOfStockReportComponent;
  let fixture: ComponentFixture<OutOfStockReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutOfStockReportComponent]
    });
    fixture = TestBed.createComponent(OutOfStockReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
