import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetvaluComponent } from './setvalu.component';

describe('SetvaluComponent', () => {
  let component: SetvaluComponent;
  let fixture: ComponentFixture<SetvaluComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetvaluComponent]
    });
    fixture = TestBed.createComponent(SetvaluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
