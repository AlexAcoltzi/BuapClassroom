import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTareasMaestroComponent } from './lista-tareas-maestro.component';

const routes: Routes = [{ path: '', component: ListaTareasMaestroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaTareasMaestroRoutingModule { }
