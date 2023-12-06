import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostProductComponent } from './lost-product.component';

describe('LostProductComponent', () => {
  let component: LostProductComponent;
  let fixture: ComponentFixture<LostProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LostProductComponent]
    });
    fixture = TestBed.createComponent(LostProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
