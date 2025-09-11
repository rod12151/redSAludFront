import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualesHIS } from './manuales-his';

describe('ManualesHIS', () => {
  let component: ManualesHIS;
  let fixture: ComponentFixture<ManualesHIS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualesHIS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualesHIS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
