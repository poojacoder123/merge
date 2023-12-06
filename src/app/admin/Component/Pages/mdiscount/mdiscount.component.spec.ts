import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdiscountComponent } from './mdiscount.component';

describe('MdiscountComponent', () => {
  let component: MdiscountComponent;
  let fixture: ComponentFixture<MdiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdiscountComponent]
    });
    fixture = TestBed.createComponent(MdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
