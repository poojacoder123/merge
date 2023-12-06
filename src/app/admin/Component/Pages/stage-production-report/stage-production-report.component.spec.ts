import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageProductionReportComponent } from './stage-production-report.component';

describe('StageProductionReportComponent', () => {
  let component: StageProductionReportComponent;
  let fixture: ComponentFixture<StageProductionReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StageProductionReportComponent]
    });
    fixture = TestBed.createComponent(StageProductionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
