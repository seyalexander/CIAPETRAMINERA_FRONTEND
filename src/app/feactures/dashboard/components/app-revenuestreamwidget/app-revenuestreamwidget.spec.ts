import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRevenuestreamwidget } from './app-revenuestreamwidget';

describe('AppRevenuestreamwidget', () => {
  let component: AppRevenuestreamwidget;
  let fixture: ComponentFixture<AppRevenuestreamwidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRevenuestreamwidget],
    }).compileComponents();

    fixture = TestBed.createComponent(AppRevenuestreamwidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
