import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareorderComponent } from './prepareorder.component';

describe('PrepareorderComponent', () => {
  let component: PrepareorderComponent;
  let fixture: ComponentFixture<PrepareorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrepareorderComponent]
    });
    fixture = TestBed.createComponent(PrepareorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
