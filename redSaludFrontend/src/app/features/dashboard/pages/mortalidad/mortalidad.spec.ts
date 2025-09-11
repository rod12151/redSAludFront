import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mortalidad } from './mortalidad';

describe('Mortalidad', () => {
  let component: Mortalidad;
  let fixture: ComponentFixture<Mortalidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mortalidad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mortalidad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
