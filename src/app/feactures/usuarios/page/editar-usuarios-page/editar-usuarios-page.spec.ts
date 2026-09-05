import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUsuariosPage } from './editar-usuarios-page';

describe('EditarUsuariosPage', () => {
  let component: EditarUsuariosPage;
  let fixture: ComponentFixture<EditarUsuariosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarUsuariosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarUsuariosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
