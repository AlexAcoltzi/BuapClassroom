import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPerfilComponent } from './editar-perfil.component';

import { AuthGuard } from 'app/guards/auth.guard';


const routes: Routes = [{ path: '', component: EditarPerfilComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarPerfilRoutingModule { }
