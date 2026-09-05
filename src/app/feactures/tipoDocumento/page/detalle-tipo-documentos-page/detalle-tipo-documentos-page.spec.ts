import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTipoDocumentosPage } from './detalle-tipo-documentos-page';

describe('DetalleTipoDocumentosPage', () => {
  let component: DetalleTipoDocumentosPage;
  let fixture: ComponentFixture<DetalleTipoDocumentosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleTipoDocumentosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleTipoDocumentosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
