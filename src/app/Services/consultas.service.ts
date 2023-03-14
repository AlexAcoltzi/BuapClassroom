import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  //El puerto puede cambiar
  baseURL:string = "http://localhost:8080/Usuarios/";

  //Observavle de tipo comportamiento para realizar cambios en el front navBar
  userLogged:BehaviorSubject<boolean>;
  name:BehaviorSubject<string>;
  foto: BehaviorSubject<string>;

  constructor(private http: HttpClient) {
    this.userLogged = new BehaviorSubject(this.validator());
    if (this.validator()) {
      const data = this.getData();
      this.name = new BehaviorSubject(`${data.nombre}`)
      this.foto = new BehaviorSubject(data.ruta);
      if (data.tipo == "0") {
        this.getCursos(data.matricula);
      }
    }
    else{
      this.name = new BehaviorSubject("");
      this.foto = new BehaviorSubject("");
    }
   }

  //funcion que recibe la matricula y contraseña del usuario para validar los datos; 
  //Retorna toda la información del usuario
  Autenticarse(matricula: any,password: any){
    return  this.http.get<any>(this.baseURL+`getAcces?matricula=${matricula}&contrasena=${password}`)
    .pipe(map(User=>{
      if(User.contrasenia != ""){
        this.saveData(JSON.stringify(User));
      }
      return User;
    }))
  }

  //Almacenamos la información del usuario en localstorage del navegador
  saveData(data:any){
    localStorage.setItem('data', data);
    this.userLogged.next(true);
    const datos = this.getData();
    this.name.next(`${datos.nombre}`);
    this.foto.next(datos.ruta);
  }

  //Funcion para obtener los datos almacenados en el localStorage
  getData(){
    if (this.validator()) {
      return JSON.parse(localStorage.getItem('data')!);
    }
    else {
      return null;
    }
  }

  //Funcion para eliminar los datos del usuario
  deleteData(){
    this.userLogged.next(false);
    this.name.next("");
    this.foto.next("");
    localStorage.removeItem('data');
  }

  //Función que valida que el usuario este logeado
  validator(){
      return localStorage.getItem('data')!= null;
  }

  subirFoto(archivo:any){
    return this.http.post<any>(this.baseURL+"subirFoto.php",JSON.stringify(archivo))
    .pipe(map(User=>{
      return User;
    }));
  }

  AgregarCurso(datos:any){
    return this.http.post<any>(this.baseURL+"AgregarCurso.php",JSON.stringify(datos))
    .pipe(map(result=>{
      console.log(result);
      return result;
    }))
  }

  getCursos(matricula:any){
    return this.http.post<any>(this.baseURL+"ObtenerCursos.php",JSON.stringify(matricula))
    .pipe(map(User=>{
      console.log("Clase" + User);
      this.saveCursos(JSON.stringify(User));
      return User;
    }))
  }

  saveCursos(data:any){
    localStorage.setItem('Cursos', data);
  }

  getClases(){
    return JSON.parse(localStorage.getItem('clases')!);
  }

}
