import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTransportistaPage } from './lista-transportista-page';

describe('ListaTransportistaPage', () => {
  let component: ListaTransportistaPage;
  let fixture: ComponentFixture<ListaTransportistaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTransportistaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaTransportistaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
