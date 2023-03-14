import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasMaestroComponent } from './tareas-maestro.component';

const routes: Routes = [{ path: '', component: TareasMaestroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasMaestroRoutingModule { }
