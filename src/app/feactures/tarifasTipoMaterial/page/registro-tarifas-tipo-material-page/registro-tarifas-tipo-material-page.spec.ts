import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTarifasTipoMaterialPage } from './registro-tarifas-tipo-material-page';

describe('RegistroTarifasTipoMaterialPage', () => {
  let component: RegistroTarifasTipoMaterialPage;
  let fixture: ComponentFixture<RegistroTarifasTipoMaterialPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroTarifasTipoMaterialPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroTarifasTipoMaterialPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
