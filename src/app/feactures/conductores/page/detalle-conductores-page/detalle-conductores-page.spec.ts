import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleConductoresPage } from './detalle-conductores-page';

describe('DetalleConductoresPage', () => {
  let component: DetalleConductoresPage;
  let fixture: ComponentFixture<DetalleConductoresPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleConductoresPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleConductoresPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
