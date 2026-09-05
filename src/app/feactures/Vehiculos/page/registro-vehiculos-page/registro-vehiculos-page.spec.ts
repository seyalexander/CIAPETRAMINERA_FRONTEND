import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVehiculosPage } from './registro-vehiculos-page';

describe('RegistroVehiculosPage', () => {
  let component: RegistroVehiculosPage;
  let fixture: ComponentFixture<RegistroVehiculosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroVehiculosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroVehiculosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
