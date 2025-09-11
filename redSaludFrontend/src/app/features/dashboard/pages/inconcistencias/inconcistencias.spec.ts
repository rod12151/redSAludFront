import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inconcistencias } from './inconcistencias';

describe('Inconcistencias', () => {
  let component: Inconcistencias;
  let fixture: ComponentFixture<Inconcistencias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inconcistencias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inconcistencias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
