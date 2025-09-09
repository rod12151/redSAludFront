import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEstadistica } from './header-estadistica';

describe('HeaderEstadistica', () => {
  let component: HeaderEstadistica;
  let fixture: ComponentFixture<HeaderEstadistica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderEstadistica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderEstadistica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
