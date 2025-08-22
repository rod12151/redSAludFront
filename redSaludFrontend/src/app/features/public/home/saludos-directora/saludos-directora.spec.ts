import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludosDirectora } from './saludos-directora';

describe('SaludosDirectora', () => {
  let component: SaludosDirectora;
  let fixture: ComponentFixture<SaludosDirectora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaludosDirectora]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaludosDirectora);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
