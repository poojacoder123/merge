import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionReceivesReportComponent } from './production-receives-report.component';

describe('ProductionReceivesReportComponent', () => {
  let component: ProductionReceivesReportComponent;
  let fixture: ComponentFixture<ProductionReceivesReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionReceivesReportComponent]
    });
    fixture = TestBed.createComponent(ProductionReceivesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
