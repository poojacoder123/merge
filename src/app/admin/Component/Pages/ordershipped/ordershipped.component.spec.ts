import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdershippedComponent } from './ordershipped.component';

describe('OrdershippedComponent', () => {
  let component: OrdershippedComponent;
  let fixture: ComponentFixture<OrdershippedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdershippedComponent]
    });
    fixture = TestBed.createComponent(OrdershippedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
