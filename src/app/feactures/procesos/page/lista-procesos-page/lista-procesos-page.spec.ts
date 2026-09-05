import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProcesosPage } from './lista-procesos-page';

describe('ListaProcesosPage', () => {
  let component: ListaProcesosPage;
  let fixture: ComponentFixture<ListaProcesosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProcesosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaProcesosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
