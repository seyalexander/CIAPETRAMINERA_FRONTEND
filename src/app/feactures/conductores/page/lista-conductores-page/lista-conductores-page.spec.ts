import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConductoresPage } from './lista-conductores-page';

describe('ListaConductoresPage', () => {
  let component: ListaConductoresPage;
  let fixture: ComponentFixture<ListaConductoresPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaConductoresPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaConductoresPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
