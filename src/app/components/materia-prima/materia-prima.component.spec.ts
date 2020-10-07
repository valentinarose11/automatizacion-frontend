import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaPrimaComponent } from './materia-prima.component';

describe('MateriaPrimaComponent', () => {
  let component: MateriaPrimaComponent;
  let fixture: ComponentFixture<MateriaPrimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaPrimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaPrimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
