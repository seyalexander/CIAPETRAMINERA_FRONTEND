import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConductoresPage } from './editar-conductores-page';

describe('EditarConductoresPage', () => {
  let component: EditarConductoresPage;
  let fixture: ComponentFixture<EditarConductoresPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarConductoresPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarConductoresPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
