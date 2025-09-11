import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Digitadores } from './digitadores';

describe('Digitadores', () => {
  let component: Digitadores;
  let fixture: ComponentFixture<Digitadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Digitadores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Digitadores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
