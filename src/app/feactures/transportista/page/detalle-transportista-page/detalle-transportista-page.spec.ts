import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTransportistaPage } from './detalle-transportista-page';

describe('DetalleTransportistaPage', () => {
  let component: DetalleTransportistaPage;
  let fixture: ComponentFixture<DetalleTransportistaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleTransportistaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleTransportistaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
