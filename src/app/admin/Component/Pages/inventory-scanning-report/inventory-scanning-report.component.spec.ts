import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryScanningReportComponent } from './inventory-scanning-report.component';

describe('InventoryScanningReportComponent', () => {
  let component: InventoryScanningReportComponent;
  let fixture: ComponentFixture<InventoryScanningReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryScanningReportComponent]
    });
    fixture = TestBed.createComponent(InventoryScanningReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
