import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsuariosPage } from './lista-usuarios-page';

describe('ListaUsuariosPage', () => {
  let component: ListaUsuariosPage;
  let fixture: ComponentFixture<ListaUsuariosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaUsuariosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaUsuariosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
