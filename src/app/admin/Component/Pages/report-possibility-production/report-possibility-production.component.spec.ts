import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPossibilityProductionComponent } from './report-possibility-production.component';

describe('ReportPossibilityProductionComponent', () => {
  let component: ReportPossibilityProductionComponent;
  let fixture: ComponentFixture<ReportPossibilityProductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportPossibilityProductionComponent]
    });
    fixture = TestBed.createComponent(ReportPossibilityProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
