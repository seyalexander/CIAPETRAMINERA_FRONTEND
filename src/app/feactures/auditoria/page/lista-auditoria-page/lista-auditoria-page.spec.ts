import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAuditoriaPage } from './lista-auditoria-page';

describe('ListaAuditoriaPage', () => {
  let component: ListaAuditoriaPage;
  let fixture: ComponentFixture<ListaAuditoriaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAuditoriaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaAuditoriaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
