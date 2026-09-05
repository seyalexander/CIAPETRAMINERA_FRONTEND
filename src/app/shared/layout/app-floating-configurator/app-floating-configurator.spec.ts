import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFloatingConfigurator } from './app-floating-configurator';

describe('AppFloatingConfigurator', () => {
  let component: AppFloatingConfigurator;
  let fixture: ComponentFixture<AppFloatingConfigurator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFloatingConfigurator],
    }).compileComponents();

    fixture = TestBed.createComponent(AppFloatingConfigurator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
