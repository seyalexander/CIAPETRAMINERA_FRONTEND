import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDocumentosPage } from './lista-documentos-page';

describe('ListaDocumentosPage', () => {
  let component: ListaDocumentosPage;
  let fixture: ComponentFixture<ListaDocumentosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDocumentosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaDocumentosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
