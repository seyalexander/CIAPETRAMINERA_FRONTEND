import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBestsellingwidget } from './app-bestsellingwidget';

describe('AppBestsellingwidget', () => {
  let component: AppBestsellingwidget;
  let fixture: ComponentFixture<AppBestsellingwidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBestsellingwidget],
    }).compileComponents();

    fixture = TestBed.createComponent(AppBestsellingwidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
