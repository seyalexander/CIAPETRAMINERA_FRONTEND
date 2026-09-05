import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroRolesPage } from './registro-roles-page';

describe('RegistroRolesPage', () => {
  let component: RegistroRolesPage;
  let fixture: ComponentFixture<RegistroRolesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroRolesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroRolesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
