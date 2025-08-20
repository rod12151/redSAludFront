import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sgd } from './sgd';

describe('Sgd', () => {
  let component: Sgd;
  let fixture: ComponentFixture<Sgd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sgd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sgd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
