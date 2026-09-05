import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMensajesPage } from './lista-mensajes-page';

describe('ListaMensajesPage', () => {
  let component: ListaMensajesPage;
  let fixture: ComponentFixture<ListaMensajesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaMensajesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaMensajesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
