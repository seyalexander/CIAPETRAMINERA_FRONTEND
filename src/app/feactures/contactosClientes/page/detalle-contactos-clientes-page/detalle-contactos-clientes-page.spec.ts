import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleContactosClientesPage } from './detalle-contactos-clientes-page';

describe('DetalleContactosClientesPage', () => {
  let component: DetalleContactosClientesPage;
  let fixture: ComponentFixture<DetalleContactosClientesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleContactosClientesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleContactosClientesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
