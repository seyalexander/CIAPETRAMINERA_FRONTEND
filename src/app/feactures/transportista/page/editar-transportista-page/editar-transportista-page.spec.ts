import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTransportistaPage } from './editar-transportista-page';

describe('EditarTransportistaPage', () => {
  let component: EditarTransportistaPage;
  let fixture: ComponentFixture<EditarTransportistaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTransportistaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarTransportistaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
