import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOrderReportComponent } from './production-order-report.component';

describe('ProductionOrderReportComponent', () => {
  let component: ProductionOrderReportComponent;
  let fixture: ComponentFixture<ProductionOrderReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionOrderReportComponent]
    });
    fixture = TestBed.createComponent(ProductionOrderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
