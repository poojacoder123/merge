import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedDistributionExpensesComponent } from './added-distribution-expenses.component';

describe('AddedDistributionExpensesComponent', () => {
  let component: AddedDistributionExpensesComponent;
  let fixture: ComponentFixture<AddedDistributionExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddedDistributionExpensesComponent]
    });
    fixture = TestBed.createComponent(AddedDistributionExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
