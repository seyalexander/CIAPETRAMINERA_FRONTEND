import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContratosPage } from './lista-contratos-page';

describe('ListaContratosPage', () => {
  let component: ListaContratosPage;
  let fixture: ComponentFixture<ListaContratosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaContratosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaContratosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
