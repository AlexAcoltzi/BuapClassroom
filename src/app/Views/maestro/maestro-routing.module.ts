import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaestroComponent } from './maestro.component';
import { AuthGuard } from 'app/guards/auth.guard';

const routes: Routes = [{ path: '', component: MaestroComponent , canActivate:[AuthGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaestroRoutingModule { }
