import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {

  cursos: { nombre: string, salon: string, dias: string, horario: string, url: string } []=[
    {'nombre': 'Arte', 'salon': 'CC001','dias': 'Martes,Jueves ', 'horario':'9:00 - 11:00 am', 'url': 'www.prueba.com' }
  ]
  tareas:{ nombre: string, estatus: string, fecha: string, calificacion: string }[]=[
    {'nombre': 'Historia del Arte', 'estatus': 'Cerrada', 'fecha': '9 de Mayo','calificacion': '100'},
    {'nombre': 'Reporte de la clase ', 'estatus': 'Cerrada', 'fecha': '11 de Mayo','calificacion': '90'},
    {'nombre': 'Mapa Mental Picasso ', 'estatus': 'En curso', 'fecha': '21 de Mayo','calificacion': 'N/A'},

  ]
  materiales: {nombre: string } []=[
    {'nombre': 'Historia_del_Arte.pdf'},
    {'nombre': 'Diapositivas_Semana1.pdf'},
    {'nombre': 'La_vida_de_Picasso.pdf'},
    {'nombre': 'Presentacion.pdf'}
  ]

  usuarios: { matricula: string,nombre: string, paterno: string, materno: string, correo:string}[]=[
    {'matricula': '201800001', 'nombre': 'Abraham', 'paterno': 'Sanchez', 'materno': 'Lopez', 'correo': 'abraham@gmail.com'},
    {'matricula': '201800002', 'nombre': 'Anahi', 'paterno': 'Mendoza', 'materno': 'Hernandez', 'correo': 'anahi@gmail.com'},
    {'matricula': '201800003', 'nombre': 'Carlos', 'paterno': 'Hernandez', 'materno': 'Guzman', 'correo': 'carlos@gmail.com'},
    {'matricula': '201800004', 'nombre': 'Diana', 'paterno': 'Escamilla', 'materno': 'Martinez', 'correo': 'diana@gmail.com'},
    {'matricula': '201800005', 'nombre': 'Elizabeth', 'paterno': 'Lovillo', 'materno': 'Hernandez', 'correo': 'elizabeth@gmail.com'},
    {'matricula': '201800006', 'nombre': 'Fernando', 'paterno': 'Campos', 'materno': 'Lopez', 'correo': 'fernando@gmail.com'},
  ]

 
  constructor() { }

  ngOnInit(): void {
  }

}
