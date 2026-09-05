import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTipoclientePage } from './registro-tipocliente-page';

describe('RegistroTipoclientePage', () => {
  let component: RegistroTipoclientePage;
  let fixture: ComponentFixture<RegistroTipoclientePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroTipoclientePage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroTipoclientePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
