import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTipoVehiculosPage } from './detalle-tipo-vehiculos-page';

describe('DetalleTipoVehiculosPage', () => {
  let component: DetalleTipoVehiculosPage;
  let fixture: ComponentFixture<DetalleTipoVehiculosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleTipoVehiculosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleTipoVehiculosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
