import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UngroupCompilationItemsComponent } from './ungroup-compilation-items.component';

describe('UngroupCompilationItemsComponent', () => {
  let component: UngroupCompilationItemsComponent;
  let fixture: ComponentFixture<UngroupCompilationItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UngroupCompilationItemsComponent]
    });
    fixture = TestBed.createComponent(UngroupCompilationItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
