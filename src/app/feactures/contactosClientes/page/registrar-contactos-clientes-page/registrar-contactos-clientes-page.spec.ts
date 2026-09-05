import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarContactosClientesPage } from './registrar-contactos-clientes-page';

describe('RegistrarContactosClientesPage', () => {
  let component: RegistrarContactosClientesPage;
  let fixture: ComponentFixture<RegistrarContactosClientesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarContactosClientesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarContactosClientesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
