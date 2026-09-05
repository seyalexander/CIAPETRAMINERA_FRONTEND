import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDocumentosPage } from './registro-documentos-page';

describe('RegistroDocumentosPage', () => {
  let component: RegistroDocumentosPage;
  let fixture: ComponentFixture<RegistroDocumentosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroDocumentosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroDocumentosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
