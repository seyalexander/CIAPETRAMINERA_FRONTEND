import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarIngresoVehiculosPage } from './editar-ingreso-vehiculos-page';

describe('EditarIngresoVehiculosPage', () => {
  let component: EditarIngresoVehiculosPage;
  let fixture: ComponentFixture<EditarIngresoVehiculosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarIngresoVehiculosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarIngresoVehiculosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
