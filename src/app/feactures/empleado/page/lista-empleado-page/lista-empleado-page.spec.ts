import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmpleadoPage } from './lista-empleado-page';

describe('ListaEmpleadoPage', () => {
  let component: ListaEmpleadoPage;
  let fixture: ComponentFixture<ListaEmpleadoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEmpleadoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaEmpleadoPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
