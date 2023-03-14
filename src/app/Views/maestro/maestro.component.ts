import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.scss']
})
export class MaestroComponent implements OnInit {

  clases: { nombre: string, salon: string} []=[
    {'nombre': 'Literatura', 'salon': 'CC001'},
    {'nombre': 'Arte', 'salon': 'CC002'},
    {'nombre': 'Algebra', 'salon': 'CC003'},
    {'nombre': 'Historia', 'salon': 'CC004'},
    {'nombre': 'Geografia', 'salon': 'CC005'},
    {'nombre': 'Informatica','salon': 'CC006'},
]

  constructor() { }

  ngOnInit(): void {
  }

}
