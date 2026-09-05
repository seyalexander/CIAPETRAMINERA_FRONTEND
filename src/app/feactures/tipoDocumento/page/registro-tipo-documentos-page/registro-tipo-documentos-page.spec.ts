import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTipoDocumentosPage } from './registro-tipo-documentos-page';

describe('RegistroTipoDocumentosPage', () => {
  let component: RegistroTipoDocumentosPage;
  let fixture: ComponentFixture<RegistroTipoDocumentosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroTipoDocumentosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroTipoDocumentosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
