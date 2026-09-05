import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVehiculosPage } from './editar-vehiculos-page';

describe('EditarVehiculosPage', () => {
  let component: EditarVehiculosPage;
  let fixture: ComponentFixture<EditarVehiculosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarVehiculosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarVehiculosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
