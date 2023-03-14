import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './estudiante.component';

import { AuthGuard } from 'app/guards/auth.guard';

const routes: Routes = [{ path: '', component: EstudianteComponent, canActivate:[AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }