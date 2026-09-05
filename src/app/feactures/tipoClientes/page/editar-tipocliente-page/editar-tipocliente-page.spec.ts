import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoclientePage } from './editar-tipocliente-page';

describe('EditarTipoclientePage', () => {
  let component: EditarTipoclientePage;
  let fixture: ComponentFixture<EditarTipoclientePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTipoclientePage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarTipoclientePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
