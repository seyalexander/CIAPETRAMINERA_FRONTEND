import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipoclientePage } from './lista-tipocliente-page';

describe('ListaTipoclientePage', () => {
  let component: ListaTipoclientePage;
  let fixture: ComponentFixture<ListaTipoclientePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTipoclientePage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaTipoclientePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
