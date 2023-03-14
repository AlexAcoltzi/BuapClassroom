import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tareas-alumno',
  templateUrl: './lista-tareas-alumno.component.html',
  styleUrls: ['./lista-tareas-alumno.component.scss']
})
export class ListaTareasAlumnoComponent implements OnInit {


  cursos: { nombre: string, salon: string, dias: string, horario: string, url: string } []=[
    {'nombre': 'Arte', 'salon': 'CC001','dias': 'Martes,Jueves ', 'horario':'9:00 - 11:00 am', 'url': 'www.prueba.com' }
  ]
  
  tareas:{ nombre: string, estatus: string, fecha: string, calificacion: string }[]=[
    {'nombre': 'Historia del Arte', 'estatus': 'Cerrada', 'fecha': '9 de Mayo','calificacion': '100'},
    {'nombre': 'Reporte de la clase ', 'estatus': 'Cerrada', 'fecha': '11 de Mayo','calificacion': '90'},
    {'nombre': 'Mapa Mental Picasso ', 'estatus': 'En curso', 'fecha': '21 de Mayo','calificacion': 'N/A'},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
