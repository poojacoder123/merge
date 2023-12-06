import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionorderplanComponent } from './productionorderplan.component';

describe('ProductionorderplanComponent', () => {
  let component: ProductionorderplanComponent;
  let fixture: ComponentFixture<ProductionorderplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionorderplanComponent]
    });
    fixture = TestBed.createComponent(ProductionorderplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
