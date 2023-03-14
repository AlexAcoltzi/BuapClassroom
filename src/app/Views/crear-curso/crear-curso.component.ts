import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ConsultasService } from 'app/Services/consultas.service';
import { first } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.scss']
})
export class CrearCursoComponent implements OnInit {

  formularioClase!: UntypedFormGroup;

  CursoForm = new UntypedFormGroup({
    NombreClase : new UntypedFormControl('', Validators.required),
    Seccion : new UntypedFormControl('', Validators.required),
    Materia : new UntypedFormControl('', Validators.required),
    Datos : new UntypedFormControl('', Validators.required),
    MatriculaProfesor : new UntypedFormControl('', Validators.required)
  })

  

  constructor(private formBuilder: UntypedFormBuilder, private http: HttpClient, private ajax: ConsultasService) { }

  ngOnInit(): void {
  }

  ObtenerDatos(form : any){
    console.log(form)
    this.ajax.AgregarCurso(form)
    .pipe(first()).subscribe(data=>{
      console.log(data.resultado);
      if (data.resultado == "Exitoso") {
        Swal.fire({
          icon: 'success',
          title: 'Curso Creado',
          text: 'El Curso ha sido creado satisfactoriamente',
          showConfirmButton: false,
          timer: 2500
        });
        setTimeout(
          function(){ 
          location.reload(); 
          }, 2500);
      }
      else{
        Swal.fire({
          icon: 'error',
          'title': 'Parece que hubo un error',
          'text' : 'Hubo un error inesperado, favor de intentarlo más tarde'
        })
      }
    })
  }

}