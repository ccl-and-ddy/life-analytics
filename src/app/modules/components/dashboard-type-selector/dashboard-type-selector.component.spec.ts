import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTypeSelectorComponent } from './dashboard-type-selector.component';

describe('DashboardTypeSelectorComponent', () => {
  let component: DashboardTypeSelectorComponent;
  let fixture: ComponentFixture<DashboardTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTypeSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
