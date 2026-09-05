import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTarifasTipoMaterialPage } from './editar-tarifas-tipo-material-page';

describe('EditarTarifasTipoMaterialPage', () => {
  let component: EditarTarifasTipoMaterialPage;
  let fixture: ComponentFixture<EditarTarifasTipoMaterialPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTarifasTipoMaterialPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarTarifasTipoMaterialPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
