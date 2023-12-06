import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUngroupCompilationItemsComponent } from './add-ungroup-compilation-items.component';

describe('AddUngroupCompilationItemsComponent', () => {
  let component: AddUngroupCompilationItemsComponent;
  let fixture: ComponentFixture<AddUngroupCompilationItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUngroupCompilationItemsComponent]
    });
    fixture = TestBed.createComponent(AddUngroupCompilationItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
