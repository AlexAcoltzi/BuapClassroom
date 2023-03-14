import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCursoComponent } from './crear-curso.component';

import { AuthGuard } from 'app/guards/auth.guard';


const routes: Routes = [{ path: '', component: CrearCursoComponent, canActivate:[AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearCursoRoutingModule { }
