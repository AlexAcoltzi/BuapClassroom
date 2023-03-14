import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoAlumnoComponent } from './curso-alumno.component';

const routes: Routes = [{ path: '', component: CursoAlumnoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoAlumnoRoutingModule { }
