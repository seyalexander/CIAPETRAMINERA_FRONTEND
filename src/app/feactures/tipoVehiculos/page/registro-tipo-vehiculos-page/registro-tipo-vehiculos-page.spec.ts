import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTipoVehiculosPage } from './registro-tipo-vehiculos-page';

describe('RegistroTipoVehiculosPage', () => {
  let component: RegistroTipoVehiculosPage;
  let fixture: ComponentFixture<RegistroTipoVehiculosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroTipoVehiculosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroTipoVehiculosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
