import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-maestro',
  templateUrl: './curso-maestro.component.html',
  styleUrls: ['./curso-maestro.component.scss']
})
export class CursoMaestroComponent implements OnInit {


  cursos: { nombre: string, salon: string, dias: string, horario: string, url: string } []=[
    {'nombre': 'Arte', 'salon': 'CC001','dias': 'Martes,Jueves ', 'horario':'9:00 - 11:00 am', 'url': 'www.prueba.com' }
  ]
  tareas:{ nombre: string, fecha: string}[]=[
    {'nombre': 'Historia del Arte', 'fecha': '9 de Mayo'},
    {'nombre': 'Reporte de la clase ', 'fecha': '11 de Mayo'},
    {'nombre': 'Mapa Mental Picasso ', 'fecha': '12 de Mayo'},

  ]
  materiales: {nombre: string } []=[
    {'nombre': 'Historia_del_Arte.pdf'},
    {'nombre': 'Diapositivas_Semana1.pdf'},
    {'nombre': 'La_vida_de_Picasso.pdf'},
    {'nombre': 'Presentacion.pdf'}
  ]

  anuncios:{usuario: string , fecha: string, contenido: string }[]=[

    {'usuario': 'Josue Lima', 'fecha': '7 de mayo', 'contenido': 'Prueba 1' },
    {'usuario': 'Josue Lima', 'fecha': '8 de mayo', 'contenido': 'Prueba 2' },
    {'usuario': 'Josue Lima', 'fecha': '9 de mayo', 'contenido': 'El dia de hoy no podré dar clase' },
  ]

  constructor() { }
  Instrucciones:any;
  fecha:any;

  ngOnInit(): void {

    
  }

  crearTarea(uno:any,dos:any, tres:any){
    console.log(uno);
    console.log(dos);
    console.log(tres);
  }

}
