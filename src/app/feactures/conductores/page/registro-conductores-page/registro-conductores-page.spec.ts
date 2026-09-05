import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroConductoresPage } from './registro-conductores-page';

describe('RegistroConductoresPage', () => {
  let component: RegistroConductoresPage;
  let fixture: ComponentFixture<RegistroConductoresPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroConductoresPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroConductoresPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
