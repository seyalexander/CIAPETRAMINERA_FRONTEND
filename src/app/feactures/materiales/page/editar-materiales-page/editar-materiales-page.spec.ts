import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMaterialesPage } from './editar-materiales-page';

describe('EditarMaterialesPage', () => {
  let component: EditarMaterialesPage;
  let fixture: ComponentFixture<EditarMaterialesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarMaterialesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarMaterialesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
