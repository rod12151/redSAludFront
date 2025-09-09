import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEstadistica } from './sidebar-estadistica';

describe('SidebarEstadistica', () => {
  let component: SidebarEstadistica;
  let fixture: ComponentFixture<SidebarEstadistica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarEstadistica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarEstadistica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
