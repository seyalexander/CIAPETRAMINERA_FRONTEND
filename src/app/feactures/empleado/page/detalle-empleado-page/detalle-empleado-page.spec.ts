import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEmpleadoPage } from './detalle-empleado-page';

describe('DetalleEmpleadoPage', () => {
  let component: DetalleEmpleadoPage;
  let fixture: ComponentFixture<DetalleEmpleadoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleEmpleadoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleEmpleadoPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
