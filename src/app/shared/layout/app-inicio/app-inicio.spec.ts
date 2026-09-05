import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInicio } from './app-inicio';

describe('AppInicio', () => {
  let component: AppInicio;
  let fixture: ComponentFixture<AppInicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppInicio],
    }).compileComponents();

    fixture = TestBed.createComponent(AppInicio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
