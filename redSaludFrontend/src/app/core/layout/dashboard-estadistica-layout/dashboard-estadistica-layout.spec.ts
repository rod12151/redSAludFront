import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEstadisticaLayout } from './dashboard-estadistica-layout';

describe('DashboardEstadisticaLayout', () => {
  let component: DashboardEstadisticaLayout;
  let fixture: ComponentFixture<DashboardEstadisticaLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardEstadisticaLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEstadisticaLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
