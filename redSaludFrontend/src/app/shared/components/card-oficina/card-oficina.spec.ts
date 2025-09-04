import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOficina } from './card-oficina';

describe('CardOficina', () => {
  let component: CardOficina;
  let fixture: ComponentFixture<CardOficina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOficina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOficina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
