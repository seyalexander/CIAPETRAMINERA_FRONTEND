import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEmpleadoPage } from './registrar-empleado-page';

describe('RegistrarEmpleadoPage', () => {
  let component: RegistrarEmpleadoPage;
  let fixture: ComponentFixture<RegistrarEmpleadoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarEmpleadoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarEmpleadoPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
