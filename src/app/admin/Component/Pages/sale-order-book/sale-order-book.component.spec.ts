import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOrderBookComponent } from './sale-order-book.component';

describe('SaleOrderBookComponent', () => {
  let component: SaleOrderBookComponent;
  let fixture: ComponentFixture<SaleOrderBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleOrderBookComponent]
    });
    fixture = TestBed.createComponent(SaleOrderBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
