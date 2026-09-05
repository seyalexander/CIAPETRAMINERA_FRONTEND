import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContactosClientesPage } from './lista-contactos-clientes-page';

describe('ListaContactosClientesPage', () => {
  let component: ListaContactosClientesPage;
  let fixture: ComponentFixture<ListaContactosClientesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaContactosClientesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaContactosClientesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
