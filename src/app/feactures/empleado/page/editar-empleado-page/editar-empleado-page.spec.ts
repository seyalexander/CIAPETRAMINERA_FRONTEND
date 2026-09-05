import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEmpleadoPage } from './editar-empleado-page';

describe('EditarEmpleadoPage', () => {
  let component: EditarEmpleadoPage;
  let fixture: ComponentFixture<EditarEmpleadoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarEmpleadoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarEmpleadoPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
