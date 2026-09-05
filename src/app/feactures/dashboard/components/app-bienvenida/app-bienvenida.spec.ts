import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBienvenida } from './app-bienvenida';

describe('AppBienvenida', () => {
  let component: AppBienvenida;
  let fixture: ComponentFixture<AppBienvenida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBienvenida],
    }).compileComponents();

    fixture = TestBed.createComponent(AppBienvenida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
