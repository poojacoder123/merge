import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionExpensesComponent } from './distribution-expenses.component';

describe('DistributionExpensesComponent', () => {
  let component: DistributionExpensesComponent;
  let fixture: ComponentFixture<DistributionExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistributionExpensesComponent]
    });
    fixture = TestBed.createComponent(DistributionExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
