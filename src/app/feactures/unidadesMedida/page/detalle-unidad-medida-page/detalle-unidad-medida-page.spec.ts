import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleUnidadMedidaPage } from './detalle-unidad-medida-page';

describe('DetalleUnidadMedidaPage', () => {
  let component: DetalleUnidadMedidaPage;
  let fixture: ComponentFixture<DetalleUnidadMedidaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleUnidadMedidaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleUnidadMedidaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
