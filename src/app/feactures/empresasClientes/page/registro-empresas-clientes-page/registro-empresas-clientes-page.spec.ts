import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEmpresasClientesPage } from './registro-empresas-clientes-page';

describe('RegistroEmpresasClientesPage', () => {
  let component: RegistroEmpresasClientesPage;
  let fixture: ComponentFixture<RegistroEmpresasClientesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroEmpresasClientesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroEmpresasClientesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
