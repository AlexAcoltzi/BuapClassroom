import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoMaestroRoutingModule } from './curso-maestro-routing.module';
import { CursoMaestroComponent } from './curso-maestro.component';


@NgModule({
  declarations: [
    CursoMaestroComponent
  ],
  imports: [
    CommonModule,
    CursoMaestroRoutingModule
  ]
})
export class CursoMaestroModule { }
