import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountDashboardComponent } from './amount-dashboard.component';

describe('AmountDashboardComponent', () => {
  let component: AmountDashboardComponent;
  let fixture: ComponentFixture<AmountDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
