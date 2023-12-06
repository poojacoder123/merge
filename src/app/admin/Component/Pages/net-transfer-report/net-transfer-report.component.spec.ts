import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetTransferReportComponent } from './net-transfer-report.component';

describe('NetTransferReportComponent', () => {
  let component: NetTransferReportComponent;
  let fixture: ComponentFixture<NetTransferReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetTransferReportComponent]
    });
    fixture = TestBed.createComponent(NetTransferReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
