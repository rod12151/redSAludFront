import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselHome } from './carrousel-home';

describe('CarrouselHome', () => {
  let component: CarrouselHome;
  let fixture: ComponentFixture<CarrouselHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrouselHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
