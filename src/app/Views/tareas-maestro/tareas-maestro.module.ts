import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasMaestroRoutingModule } from './tareas-maestro-routing.module';
import { TareasMaestroComponent } from './tareas-maestro.component';


@NgModule({
  declarations: [
    TareasMaestroComponent
  ],
  imports: [
    CommonModule,
    TareasMaestroRoutingModule
  ]
})
export class TareasMaestroModule { }
