import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarPerfilRoutingModule} from './editar-perfil-routing.module';
import { EditarPerfilComponent } from './editar-perfil.component';


@NgModule({
  declarations: [
    EditarPerfilComponent
  ],
  imports: [
    CommonModule,
    EditarPerfilRoutingModule
  ]
})
export class EditarPerfilModule { }