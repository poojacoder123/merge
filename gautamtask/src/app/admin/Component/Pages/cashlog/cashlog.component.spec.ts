import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashlogComponent } from './cashlog.component';

describe('CashlogComponent', () => {
  let component: CashlogComponent;
  let fixture: ComponentFixture<CashlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashlogComponent]
    });
    fixture = TestBed.createComponent(CashlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
