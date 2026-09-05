import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAuditoriaPage } from './editar-auditoria-page';

describe('EditarAuditoriaPage', () => {
  let component: EditarAuditoriaPage;
  let fixture: ComponentFixture<EditarAuditoriaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarAuditoriaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarAuditoriaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
