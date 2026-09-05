import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMaterialesPage } from './registrar-materiales-page';

describe('RegistrarMaterialesPage', () => {
  let component: RegistrarMaterialesPage;
  let fixture: ComponentFixture<RegistrarMaterialesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarMaterialesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarMaterialesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
