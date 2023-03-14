import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaTareasAlumnoRoutingModule } from './lista-tareas-alumno-routing.module';
import { ListaTareasAlumnoComponent } from './lista-tareas-alumno.component';


@NgModule({
  declarations: [
    ListaTareasAlumnoComponent
  ],
  imports: [
    CommonModule,
    ListaTareasAlumnoRoutingModule
  ]
})
export class ListaTareasAlumnoModule { }
