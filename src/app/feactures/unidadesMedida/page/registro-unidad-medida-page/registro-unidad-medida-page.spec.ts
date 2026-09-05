import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUnidadMedidaPage } from './registro-unidad-medida-page';

describe('RegistroUnidadMedidaPage', () => {
  let component: RegistroUnidadMedidaPage;
  let fixture: ComponentFixture<RegistroUnidadMedidaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroUnidadMedidaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroUnidadMedidaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
