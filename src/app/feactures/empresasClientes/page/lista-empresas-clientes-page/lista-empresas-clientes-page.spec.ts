import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmpresasClientesPage } from './lista-empresas-clientes-page';

describe('ListaEmpresasClientesPage', () => {
  let component: ListaEmpresasClientesPage;
  let fixture: ComponentFixture<ListaEmpresasClientesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEmpresasClientesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaEmpresasClientesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
