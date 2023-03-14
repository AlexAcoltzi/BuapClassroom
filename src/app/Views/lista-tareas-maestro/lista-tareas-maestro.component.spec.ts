import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTareasMaestroComponent } from './lista-tareas-maestro.component';

describe('ListaTareasMaestroComponent', () => {
  let component: ListaTareasMaestroComponent;
  let fixture: ComponentFixture<ListaTareasMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTareasMaestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTareasMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
