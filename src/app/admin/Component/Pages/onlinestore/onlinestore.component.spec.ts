import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinestoreComponent } from './onlinestore.component';

describe('OnlinestoreComponent', () => {
  let component: OnlinestoreComponent;
  let fixture: ComponentFixture<OnlinestoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlinestoreComponent]
    });
    fixture = TestBed.createComponent(OnlinestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
