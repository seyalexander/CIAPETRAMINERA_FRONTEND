import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRecentsaleswidget } from './app-recentsaleswidget';

describe('AppRecentsaleswidget', () => {
  let component: AppRecentsaleswidget;
  let fixture: ComponentFixture<AppRecentsaleswidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRecentsaleswidget],
    }).compileComponents();

    fixture = TestBed.createComponent(AppRecentsaleswidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
