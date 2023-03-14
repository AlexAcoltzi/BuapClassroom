import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tareas-maestro',
  templateUrl: './lista-tareas-maestro.component.html',
  styleUrls: ['./lista-tareas-maestro.component.scss']
})
export class ListaTareasMaestroComponent implements OnInit {

  
  cursos: { nombre: string, salon: string, dias: string, horario: string, url: string } []=[
    {'nombre': 'Arte', 'salon': 'CC001','dias': 'Martes,Jueves ', 'horario':'9:00 - 11:00 am', 'url': 'www.prueba.com' }
  ]
  tareas:{ nombre: string, estatus: string, fecha: string}[]=[
    {'nombre': 'Historia del Arte', 'estatus': 'Cerrada', 'fecha': '9 de Mayo'},
    {'nombre': 'Reporte de la clase ', 'estatus': 'Cerrada', 'fecha': '11 de Mayo'},
    {'nombre': 'Mapa Mental Picasso ', 'estatus': 'En curso', 'fecha': '21 de Mayo'},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
