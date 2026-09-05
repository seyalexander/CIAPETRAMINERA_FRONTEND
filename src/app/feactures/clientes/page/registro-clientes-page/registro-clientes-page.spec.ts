import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroClientesPage } from './registro-clientes-page';

describe('RegistroClientesPage', () => {
  let component: RegistroClientesPage;
  let fixture: ComponentFixture<RegistroClientesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroClientesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroClientesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
