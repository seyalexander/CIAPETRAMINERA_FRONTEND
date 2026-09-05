import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEmpresasClientesPage } from './editar-empresas-clientes-page';

describe('EditarEmpresasClientesPage', () => {
  let component: EditarEmpresasClientesPage;
  let fixture: ComponentFixture<EditarEmpresasClientesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarEmpresasClientesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarEmpresasClientesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
