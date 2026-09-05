import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProcesosPage } from './detalle-procesos-page';

describe('DetalleProcesosPage', () => {
  let component: DetalleProcesosPage;
  let fixture: ComponentFixture<DetalleProcesosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleProcesosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleProcesosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
