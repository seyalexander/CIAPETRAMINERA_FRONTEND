import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAuditoriaPage } from './detalle-auditoria-page';

describe('DetalleAuditoriaPage', () => {
  let component: DetalleAuditoriaPage;
  let fixture: ComponentFixture<DetalleAuditoriaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleAuditoriaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleAuditoriaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
