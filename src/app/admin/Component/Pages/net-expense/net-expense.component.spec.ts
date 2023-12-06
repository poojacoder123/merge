import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetExpenseComponent } from './net-expense.component';

describe('NetExpenseComponent', () => {
  let component: NetExpenseComponent;
  let fixture: ComponentFixture<NetExpenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetExpenseComponent]
    });
    fixture = TestBed.createComponent(NetExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
