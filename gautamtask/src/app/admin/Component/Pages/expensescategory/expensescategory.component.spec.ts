import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensescategoryComponent } from './expensescategory.component';

describe('ExpensescategoryComponent', () => {
  let component: ExpensescategoryComponent;
  let fixture: ComponentFixture<ExpensescategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensescategoryComponent]
    });
    fixture = TestBed.createComponent(ExpensescategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
