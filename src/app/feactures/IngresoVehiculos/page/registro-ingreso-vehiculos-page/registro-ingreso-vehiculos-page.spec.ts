import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroIngresoVehiculosPage } from './registro-ingreso-vehiculos-page';

describe('RegistroIngresoVehiculosPage', () => {
  let component: RegistroIngresoVehiculosPage;
  let fixture: ComponentFixture<RegistroIngresoVehiculosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroIngresoVehiculosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroIngresoVehiculosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
