import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTipoclientePage } from './detalle-tipocliente-page';

describe('DetalleTipoclientePage', () => {
  let component: DetalleTipoclientePage;
  let fixture: ComponentFixture<DetalleTipoclientePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleTipoclientePage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleTipoclientePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
