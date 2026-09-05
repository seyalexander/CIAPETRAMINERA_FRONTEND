import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDocumentosPage } from './editar-documentos-page';

describe('EditarDocumentosPage', () => {
  let component: EditarDocumentosPage;
  let fixture: ComponentFixture<EditarDocumentosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarDocumentosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarDocumentosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
