import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipoDocumentosPage } from './lista-tipo-documentos-page';

describe('ListaTipoDocumentosPage', () => {
  let component: ListaTipoDocumentosPage;
  let fixture: ComponentFixture<ListaTipoDocumentosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTipoDocumentosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaTipoDocumentosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
