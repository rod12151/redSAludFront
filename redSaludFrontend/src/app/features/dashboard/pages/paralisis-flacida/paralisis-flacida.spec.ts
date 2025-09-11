import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalisisFlacida } from './paralisis-flacida';

describe('ParalisisFlacida', () => {
  let component: ParalisisFlacida;
  let fixture: ComponentFixture<ParalisisFlacida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParalisisFlacida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParalisisFlacida);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
