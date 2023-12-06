import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScanBoxComponent } from './add-scan-box.component';

describe('AddScanBoxComponent', () => {
  let component: AddScanBoxComponent;
  let fixture: ComponentFixture<AddScanBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddScanBoxComponent]
    });
    fixture = TestBed.createComponent(AddScanBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
