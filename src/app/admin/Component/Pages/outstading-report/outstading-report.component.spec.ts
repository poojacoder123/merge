import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstadingReportComponent } from './outstading-report.component';

describe('OutstadingReportComponent', () => {
  let component: OutstadingReportComponent;
  let fixture: ComponentFixture<OutstadingReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutstadingReportComponent]
    });
    fixture = TestBed.createComponent(OutstadingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
