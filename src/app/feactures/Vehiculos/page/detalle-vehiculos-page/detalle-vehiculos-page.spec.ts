import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVehiculosPage } from './detalle-vehiculos-page';

describe('DetalleVehiculosPage', () => {
  let component: DetalleVehiculosPage;
  let fixture: ComponentFixture<DetalleVehiculosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleVehiculosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleVehiculosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
