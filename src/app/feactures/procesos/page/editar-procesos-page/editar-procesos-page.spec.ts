import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProcesosPage } from './editar-procesos-page';

describe('EditarProcesosPage', () => {
  let component: EditarProcesosPage;
  let fixture: ComponentFixture<EditarProcesosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarProcesosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarProcesosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
