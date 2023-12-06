import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDropShippingComponent } from './add-drop-shipping.component';

describe('AddDropShippingComponent', () => {
  let component: AddDropShippingComponent;
  let fixture: ComponentFixture<AddDropShippingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDropShippingComponent]
    });
    fixture = TestBed.createComponent(AddDropShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
