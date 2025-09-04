import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependenciaHome } from './dependencia-home';

describe('DependenciaHome', () => {
  let component: DependenciaHome;
  let fixture: ComponentFixture<DependenciaHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependenciaHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependenciaHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
