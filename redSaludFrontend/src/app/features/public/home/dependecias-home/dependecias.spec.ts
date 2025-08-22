import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dependecias } from './dependecias';

describe('Dependecias', () => {
  let component: Dependecias;
  let fixture: ComponentFixture<Dependecias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dependecias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dependecias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
