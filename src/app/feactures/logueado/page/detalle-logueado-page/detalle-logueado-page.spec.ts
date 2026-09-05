import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLogueadoPage } from './detalle-logueado-page';

describe('DetalleLogueadoPage', () => {
  let component: DetalleLogueadoPage;
  let fixture: ComponentFixture<DetalleLogueadoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleLogueadoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleLogueadoPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
