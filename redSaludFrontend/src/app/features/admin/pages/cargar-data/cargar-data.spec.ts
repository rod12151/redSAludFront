import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarData } from './cargar-data';

describe('CargarData', () => {
  let component: CargarData;
  let fixture: ComponentFixture<CargarData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargarData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
