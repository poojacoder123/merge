import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponentsReportComponent } from './product-components-report.component';

describe('ProductComponentsReportComponent', () => {
  let component: ProductComponentsReportComponent;
  let fixture: ComponentFixture<ProductComponentsReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponentsReportComponent]
    });
    fixture = TestBed.createComponent(ProductComponentsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
