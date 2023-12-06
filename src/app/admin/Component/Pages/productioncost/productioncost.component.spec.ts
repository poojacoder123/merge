import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductioncostComponent } from './productioncost.component';

describe('ProductioncostComponent', () => {
  let component: ProductioncostComponent;
  let fixture: ComponentFixture<ProductioncostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductioncostComponent]
    });
    fixture = TestBed.createComponent(ProductioncostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
