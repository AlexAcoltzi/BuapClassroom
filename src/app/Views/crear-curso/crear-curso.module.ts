import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearCursoRoutingModule} from './crear-curso-routing.module';
import { CrearCursoComponent } from './crear-curso.component';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CrearCursoComponent
  ],
  imports: [
    CommonModule,
    CrearCursoRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class CrearCursoModule { }