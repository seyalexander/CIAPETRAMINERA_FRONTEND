import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleUsuariosPage } from './detalle-usuarios-page';

describe('DetalleUsuariosPage', () => {
  let component: DetalleUsuariosPage;
  let fixture: ComponentFixture<DetalleUsuariosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleUsuariosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleUsuariosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
