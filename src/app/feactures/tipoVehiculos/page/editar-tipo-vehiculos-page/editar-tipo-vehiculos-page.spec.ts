import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoVehiculosPage } from './editar-tipo-vehiculos-page';

describe('EditarTipoVehiculosPage', () => {
  let component: EditarTipoVehiculosPage;
  let fixture: ComponentFixture<EditarTipoVehiculosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTipoVehiculosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarTipoVehiculosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
