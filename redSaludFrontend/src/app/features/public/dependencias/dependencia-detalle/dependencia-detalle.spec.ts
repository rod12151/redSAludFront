import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependenciaDetalle } from './dependencia-detalle';

describe('DependenciaDetalle', () => {
  let component: DependenciaDetalle;
  let fixture: ComponentFixture<DependenciaDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependenciaDetalle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependenciaDetalle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
