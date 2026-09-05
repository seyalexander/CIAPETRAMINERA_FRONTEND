import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContratosPage } from './editar-contratos-page';

describe('EditarContratosPage', () => {
  let component: EditarContratosPage;
  let fixture: ComponentFixture<EditarContratosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarContratosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarContratosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
