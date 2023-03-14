import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTareasAlumnoComponent } from './lista-tareas-alumno.component';

const routes: Routes = [{ path: '', component: ListaTareasAlumnoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaTareasAlumnoRoutingModule { }
