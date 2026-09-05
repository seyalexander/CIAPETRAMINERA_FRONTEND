import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMaterialesPage } from './lista-materiales-page';

describe('ListaMaterialesPage', () => {
  let component: ListaMaterialesPage;
  let fixture: ComponentFixture<ListaMaterialesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaMaterialesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaMaterialesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
