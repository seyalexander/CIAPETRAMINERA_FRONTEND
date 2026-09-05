import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleContratosPage } from './detalle-contratos-page';

describe('DetalleContratosPage', () => {
  let component: DetalleContratosPage;
  let fixture: ComponentFixture<DetalleContratosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleContratosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleContratosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
