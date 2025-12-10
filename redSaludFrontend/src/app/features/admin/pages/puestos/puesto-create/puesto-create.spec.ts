import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestoCreate } from './puesto-create';

describe('PuestoCreate', () => {
  let component: PuestoCreate;
  let fixture: ComponentFixture<PuestoCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuestoCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuestoCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
