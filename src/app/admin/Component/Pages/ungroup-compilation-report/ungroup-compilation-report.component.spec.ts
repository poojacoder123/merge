import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UngroupCompilationReportComponent } from './ungroup-compilation-report.component';

describe('UngroupCompilationReportComponent', () => {
  let component: UngroupCompilationReportComponent;
  let fixture: ComponentFixture<UngroupCompilationReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UngroupCompilationReportComponent]
    });
    fixture = TestBed.createComponent(UngroupCompilationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
