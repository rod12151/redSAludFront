import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarridoSBR } from './barrido-sbr';

describe('BarridoSBR', () => {
  let component: BarridoSBR;
  let fixture: ComponentFixture<BarridoSBR>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarridoSBR]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarridoSBR);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
