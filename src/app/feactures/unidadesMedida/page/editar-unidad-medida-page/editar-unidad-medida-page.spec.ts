import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUnidadMedidaPage } from './editar-unidad-medida-page';

describe('EditarUnidadMedidaPage', () => {
  let component: EditarUnidadMedidaPage;
  let fixture: ComponentFixture<EditarUnidadMedidaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarUnidadMedidaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarUnidadMedidaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
