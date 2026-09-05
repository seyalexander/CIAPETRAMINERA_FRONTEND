import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUnidadMedidaPage } from './lista-unidad-medida-page';

describe('ListaUnidadMedidaPage', () => {
  let component: ListaUnidadMedidaPage;
  let fixture: ComponentFixture<ListaUnidadMedidaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaUnidadMedidaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaUnidadMedidaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
