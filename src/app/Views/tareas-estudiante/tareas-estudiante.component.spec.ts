import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasEstudianteComponent } from './tareas-estudiante.component';

describe('TareasEstudianteComponent', () => {
  let component: TareasEstudianteComponent;
  let fixture: ComponentFixture<TareasEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
