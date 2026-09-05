import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNotificationswidget } from './app-notificationswidget';

describe('AppNotificationswidget', () => {
  let component: AppNotificationswidget;
  let fixture: ComponentFixture<AppNotificationswidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppNotificationswidget],
    }).compileComponents();

    fixture = TestBed.createComponent(AppNotificationswidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
