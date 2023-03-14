import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoAlumnoComponent } from './curso-alumno.component';

describe('CursoAlumnoComponent', () => {
  let component: CursoAlumnoComponent;
  let fixture: ComponentFixture<CursoAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
