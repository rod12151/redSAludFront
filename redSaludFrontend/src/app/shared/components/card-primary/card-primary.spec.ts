import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrimary } from './card-primary';

describe('CardPrimary', () => {
  let component: CardPrimary;
  let fixture: ComponentFixture<CardPrimary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPrimary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPrimary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
