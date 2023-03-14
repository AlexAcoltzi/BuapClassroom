import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasEstudianteComponent } from './tareas-estudiante.component';

const routes: Routes = [{ path: '', component: TareasEstudianteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasEstudianteRoutingModule { }
