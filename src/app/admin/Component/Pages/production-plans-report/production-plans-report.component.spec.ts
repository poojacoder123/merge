import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionPlansReportComponent } from './production-plans-report.component';

describe('ProductionPlansReportComponent', () => {
  let component: ProductionPlansReportComponent;
  let fixture: ComponentFixture<ProductionPlansReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionPlansReportComponent]
    });
    fixture = TestBed.createComponent(ProductionPlansReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
