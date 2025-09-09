import { TestBed } from '@angular/core/testing';

import { DashboardEstadisticaService } from './dashboard-estadistica-service';

describe('DashboardEstadisticaService', () => {
  let service: DashboardEstadisticaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardEstadisticaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
