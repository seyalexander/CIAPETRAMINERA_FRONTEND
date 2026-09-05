import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMaterialesPage } from './detalle-materiales-page';

describe('DetalleMaterialesPage', () => {
  let component: DetalleMaterialesPage;
  let fixture: ComponentFixture<DetalleMaterialesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleMaterialesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleMaterialesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
