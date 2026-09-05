import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProcesosPage } from './registro-procesos-page';

describe('RegistroProcesosPage', () => {
  let component: RegistroProcesosPage;
  let fixture: ComponentFixture<RegistroProcesosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroProcesosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroProcesosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
