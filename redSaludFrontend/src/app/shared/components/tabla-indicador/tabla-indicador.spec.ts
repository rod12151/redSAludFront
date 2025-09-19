import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaIndicador } from './tabla-indicador';

describe('TablaIndicador', () => {
  let component: TablaIndicador;
  let fixture: ComponentFixture<TablaIndicador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaIndicador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaIndicador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
