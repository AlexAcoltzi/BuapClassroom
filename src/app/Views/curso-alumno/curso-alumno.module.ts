import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoAlumnoRoutingModule } from './curso-alumno-routing.module';
import { CursoAlumnoComponent } from './curso-alumno.component';


@NgModule({
  declarations: [
    CursoAlumnoComponent
  ],
  imports: [
    CommonModule,
    CursoAlumnoRoutingModule
  ]
})
export class CursoAlumnoModule { }
