import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDocumentosPage } from './detalle-documentos-page';

describe('DetalleDocumentosPage', () => {
  let component: DetalleDocumentosPage;
  let fixture: ComponentFixture<DetalleDocumentosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleDocumentosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleDocumentosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
