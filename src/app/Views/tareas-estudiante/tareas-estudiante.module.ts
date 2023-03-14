import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasEstudianteRoutingModule } from './tareas-estudiante-routing.module';
import { TareasEstudianteComponent } from './tareas-estudiante.component';


@NgModule({
  declarations: [
    TareasEstudianteComponent
  ],
  imports: [
    CommonModule,
    TareasEstudianteRoutingModule
  ]
})
export class TareasEstudianteModule { }
