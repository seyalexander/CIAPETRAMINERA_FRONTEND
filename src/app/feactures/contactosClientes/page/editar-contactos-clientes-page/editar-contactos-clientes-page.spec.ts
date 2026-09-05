import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContactosClientesPage } from './editar-contactos-clientes-page';

describe('EditarContactosClientesPage', () => {
  let component: EditarContactosClientesPage;
  let fixture: ComponentFixture<EditarContactosClientesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarContactosClientesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarContactosClientesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
