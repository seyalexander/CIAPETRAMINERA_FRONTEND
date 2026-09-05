import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRolesPage } from './detalle-roles-page';

describe('DetalleRolesPage', () => {
  let component: DetalleRolesPage;
  let fixture: ComponentFixture<DetalleRolesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleRolesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleRolesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
