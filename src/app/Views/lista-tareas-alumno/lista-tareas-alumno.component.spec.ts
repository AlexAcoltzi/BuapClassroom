import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTareasAlumnoComponent } from './lista-tareas-alumno.component';

describe('ListaTareasAlumnoComponent', () => {
  let component: ListaTareasAlumnoComponent;
  let fixture: ComponentFixture<ListaTareasAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTareasAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTareasAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
