import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareordereComponent } from './prepareordere.component';

describe('PrepareordereComponent', () => {
  let component: PrepareordereComponent;
  let fixture: ComponentFixture<PrepareordereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrepareordereComponent]
    });
    fixture = TestBed.createComponent(PrepareordereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
