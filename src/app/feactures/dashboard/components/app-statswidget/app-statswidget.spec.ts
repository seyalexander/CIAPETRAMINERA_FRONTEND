import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStatswidget } from './app-statswidget';

describe('AppStatswidget', () => {
  let component: AppStatswidget;
  let fixture: ComponentFixture<AppStatswidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppStatswidget],
    }).compileComponents();

    fixture = TestBed.createComponent(AppStatswidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
