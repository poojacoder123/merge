import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetPurchaseReportComponent } from './net-purchase-report.component';

describe('NetPurchaseReportComponent', () => {
  let component: NetPurchaseReportComponent;
  let fixture: ComponentFixture<NetPurchaseReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetPurchaseReportComponent]
    });
    fixture = TestBed.createComponent(NetPurchaseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
