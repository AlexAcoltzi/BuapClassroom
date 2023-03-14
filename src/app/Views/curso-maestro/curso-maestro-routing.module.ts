import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoMaestroComponent } from './curso-maestro.component';

const routes: Routes = [{ path: '', component: CursoMaestroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoMaestroRoutingModule { }
