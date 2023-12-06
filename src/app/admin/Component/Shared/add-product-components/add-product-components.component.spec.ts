import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductComponentsComponent } from './add-product-components.component';

describe('AddProductComponentsComponent', () => {
  let component: AddProductComponentsComponent;
  let fixture: ComponentFixture<AddProductComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductComponentsComponent]
    });
    fixture = TestBed.createComponent(AddProductComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
