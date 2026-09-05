import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIngresoVehiculosPage } from './lista-ingreso-vehiculos-page';

describe('ListaIngresoVehiculosPage', () => {
  let component: ListaIngresoVehiculosPage;
  let fixture: ComponentFixture<ListaIngresoVehiculosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaIngresoVehiculosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaIngresoVehiculosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
