import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeapiComponent } from './upgradeapi.component';

describe('UpgradeapiComponent', () => {
  let component: UpgradeapiComponent;
  let fixture: ComponentFixture<UpgradeapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpgradeapiComponent]
    });
    fixture = TestBed.createComponent(UpgradeapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
