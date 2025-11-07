import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestoUpdate } from './puesto-update';

describe('PuestoUpdate', () => {
  let component: PuestoUpdate;
  let fixture: ComponentFixture<PuestoUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuestoUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuestoUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
