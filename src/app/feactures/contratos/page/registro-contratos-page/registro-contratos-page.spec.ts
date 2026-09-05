import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroContratosPage } from './registro-contratos-page';

describe('RegistroContratosPage', () => {
  let component: RegistroContratosPage;
  let fixture: ComponentFixture<RegistroContratosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroContratosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroContratosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
