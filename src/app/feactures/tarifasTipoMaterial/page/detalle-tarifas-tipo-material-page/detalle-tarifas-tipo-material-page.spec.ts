import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTarifasTipoMaterialPage } from './detalle-tarifas-tipo-material-page';

describe('DetalleTarifasTipoMaterialPage', () => {
  let component: DetalleTarifasTipoMaterialPage;
  let fixture: ComponentFixture<DetalleTarifasTipoMaterialPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleTarifasTipoMaterialPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleTarifasTipoMaterialPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
