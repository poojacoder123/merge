import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProductionCostsComponent } from './report-production-costs.component';

describe('ReportProductionCostsComponent', () => {
  let component: ReportProductionCostsComponent;
  let fixture: ComponentFixture<ReportProductionCostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportProductionCostsComponent]
    });
    fixture = TestBed.createComponent(ReportProductionCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
