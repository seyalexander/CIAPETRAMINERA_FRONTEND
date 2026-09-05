import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUsuariosPage } from './registro-usuarios-page';

describe('RegistroUsuariosPage', () => {
  let component: RegistroUsuariosPage;
  let fixture: ComponentFixture<RegistroUsuariosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroUsuariosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroUsuariosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
