import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEmpresasClientesPage } from './detalle-empresas-clientes-page';

describe('DetalleEmpresasClientesPage', () => {
  let component: DetalleEmpresasClientesPage;
  let fixture: ComponentFixture<DetalleEmpresasClientesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleEmpresasClientesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleEmpresasClientesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
