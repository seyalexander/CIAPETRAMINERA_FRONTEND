import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipoVehiculosPage } from './lista-tipo-vehiculos-page';

describe('ListaTipoVehiculosPage', () => {
  let component: ListaTipoVehiculosPage;
  let fixture: ComponentFixture<ListaTipoVehiculosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTipoVehiculosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaTipoVehiculosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
