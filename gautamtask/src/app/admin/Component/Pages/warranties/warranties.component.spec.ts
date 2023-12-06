import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantiesComponent } from './warranties.component';

describe('WarrantiesComponent', () => {
  let component: WarrantiesComponent;
  let fixture: ComponentFixture<WarrantiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarrantiesComponent]
    });
    fixture = TestBed.createComponent(WarrantiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
