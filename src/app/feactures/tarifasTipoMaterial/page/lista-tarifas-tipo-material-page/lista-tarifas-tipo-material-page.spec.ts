import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTarifasTipoMaterialPage } from './lista-tarifas-tipo-material-page';

describe('ListaTarifasTipoMaterialPage', () => {
  let component: ListaTarifasTipoMaterialPage;
  let fixture: ComponentFixture<ListaTarifasTipoMaterialPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTarifasTipoMaterialPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaTarifasTipoMaterialPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
