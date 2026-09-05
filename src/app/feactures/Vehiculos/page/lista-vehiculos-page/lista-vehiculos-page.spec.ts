import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVehiculosPage } from './lista-vehiculos-page';

describe('ListaVehiculosPage', () => {
  let component: ListaVehiculosPage;
  let fixture: ComponentFixture<ListaVehiculosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaVehiculosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaVehiculosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
