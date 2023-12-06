import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetSalesReportComponent } from './net-sales-report.component';

describe('NetSalesReportComponent', () => {
  let component: NetSalesReportComponent;
  let fixture: ComponentFixture<NetSalesReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetSalesReportComponent]
    });
    fixture = TestBed.createComponent(NetSalesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
