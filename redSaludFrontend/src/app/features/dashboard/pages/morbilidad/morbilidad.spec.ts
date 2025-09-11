import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Morbilidad } from './morbilidad';

describe('Morbilidad', () => {
  let component: Morbilidad;
  let fixture: ComponentFixture<Morbilidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Morbilidad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Morbilidad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
