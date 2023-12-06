import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePendingReportComponent } from './purchase-pending-report.component';

describe('PurchasePendingReportComponent', () => {
  let component: PurchasePendingReportComponent;
  let fixture: ComponentFixture<PurchasePendingReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasePendingReportComponent]
    });
    fixture = TestBed.createComponent(PurchasePendingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
