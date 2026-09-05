import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTransportistaPage } from './registro-transportista-page';

describe('RegistroTransportistaPage', () => {
  let component: RegistroTransportistaPage;
  let fixture: ComponentFixture<RegistroTransportistaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroTransportistaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroTransportistaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
