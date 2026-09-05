import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoDocumentosPage } from './editar-tipo-documentos-page';

describe('EditarTipoDocumentosPage', () => {
  let component: EditarTipoDocumentosPage;
  let fixture: ComponentFixture<EditarTipoDocumentosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTipoDocumentosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarTipoDocumentosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
