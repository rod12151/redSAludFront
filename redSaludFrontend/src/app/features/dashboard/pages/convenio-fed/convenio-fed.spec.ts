import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenioFED } from './convenio-fed';

describe('ConvenioFED', () => {
  let component: ConvenioFED;
  let fixture: ComponentFixture<ConvenioFED>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvenioFED]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvenioFED);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
