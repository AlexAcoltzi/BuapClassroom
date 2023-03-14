import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaTareasMaestroRoutingModule } from './lista-tareas-maestro-routing.module';
import { ListaTareasMaestroComponent } from './lista-tareas-maestro.component';


@NgModule({
  declarations: [
    ListaTareasMaestroComponent
  ],
  imports: [
    CommonModule,
    ListaTareasMaestroRoutingModule
  ]
})
export class ListaTareasMaestroModule { }
