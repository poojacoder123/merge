import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariancesProductionQualitiesReportComponent } from './variances-production-qualities-report.component';

describe('VariancesProductionQualitiesReportComponent', () => {
  let component: VariancesProductionQualitiesReportComponent;
  let fixture: ComponentFixture<VariancesProductionQualitiesReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariancesProductionQualitiesReportComponent]
    });
    fixture = TestBed.createComponent(VariancesProductionQualitiesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
