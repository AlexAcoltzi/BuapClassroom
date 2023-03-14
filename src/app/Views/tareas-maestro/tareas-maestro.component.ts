import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas-maestro',
  templateUrl: './tareas-maestro.component.html',
  styleUrls: ['./tareas-maestro.component.scss']
})
export class TareasMaestroComponent implements OnInit {

  
  cursos: { nombre: string, salon: string, dias: string, horario: string, url: string } []=[
    {'nombre': 'Arte', 'salon': 'CC001','dias': 'Martes,Jueves ', 'horario':'9:00 - 11:00 am', 'url': 'www.prueba.com' }
  ]
  tareas:{ nombre: string, fecha: string}[]=[
    {'nombre': 'Historia del Arte', 'fecha': '9 de Mayo'}
  ]
  comentarios: {imagen:string, usuario: string, texto: string}[]=[
    {'imagen': 'https://preview.redd.it/ujfe4ftg0u671.jpg?width=960&crop=smart&auto=webp&s=0a3df4fc18a50d635ec05b47ba78bc2b84a2c53c','usuario': 'Josue Lima', 'texto': 'Ya subí el material para hacer la tarea'},
    {'imagen': 'https://iuiog.com/wp-content/uploads/2019/04/student-3500990_1920-600x400.jpg','usuario': 'Jorge Cruz', 'texto': 'Qué tan largo debe de ser el reporte?'},
    {'imagen': 'https://preview.redd.it/ujfe4ftg0u671.jpg?width=960&crop=smart&auto=webp&s=0a3df4fc18a50d635ec05b47ba78bc2b84a2c53c','usuario': 'Josue Lima', 'texto': 'De 2 cuartillas minimo.'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
