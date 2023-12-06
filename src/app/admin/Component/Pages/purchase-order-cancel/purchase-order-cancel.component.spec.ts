import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderCancelComponent } from './purchase-order-cancel.component';

describe('PurchaseOrderCancelComponent', () => {
  let component: PurchaseOrderCancelComponent;
  let fixture: ComponentFixture<PurchaseOrderCancelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseOrderCancelComponent]
    });
    fixture = TestBed.createComponent(PurchaseOrderCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
