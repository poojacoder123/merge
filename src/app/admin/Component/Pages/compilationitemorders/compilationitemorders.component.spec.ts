import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilationitemordersComponent } from './compilationitemorders.component';

describe('CompilationitemordersComponent', () => {
  let component: CompilationitemordersComponent;
  let fixture: ComponentFixture<CompilationitemordersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompilationitemordersComponent]
    });
    fixture = TestBed.createComponent(CompilationitemordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
