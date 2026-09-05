import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleIngresoVehiculosPage } from './detalle-ingreso-vehiculos-page';

describe('DetalleIngresoVehiculosPage', () => {
  let component: DetalleIngresoVehiculosPage;
  let fixture: ComponentFixture<DetalleIngresoVehiculosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleIngresoVehiculosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleIngresoVehiculosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
