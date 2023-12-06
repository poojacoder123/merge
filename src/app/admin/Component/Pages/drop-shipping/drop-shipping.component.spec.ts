import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropShippingComponent } from './drop-shipping.component';

describe('DropShippingComponent', () => {
  let component: DropShippingComponent;
  let fixture: ComponentFixture<DropShippingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropShippingComponent]
    });
    fixture = TestBed.createComponent(DropShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
