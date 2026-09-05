import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRolesPage } from './editar-roles-page';

describe('EditarRolesPage', () => {
  let component: EditarRolesPage;
  let fixture: ComponentFixture<EditarRolesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarRolesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarRolesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
