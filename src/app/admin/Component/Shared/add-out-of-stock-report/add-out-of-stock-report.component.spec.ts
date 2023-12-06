import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOutOfStockReportComponent } from './add-out-of-stock-report.component';

describe('AddOutOfStockReportComponent', () => {
  let component: AddOutOfStockReportComponent;
  let fixture: ComponentFixture<AddOutOfStockReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOutOfStockReportComponent]
    });
    fixture = TestBed.createComponent(AddOutOfStockReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
