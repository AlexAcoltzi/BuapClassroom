import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth/auth.service';
import { ConsultasService } from 'app/Services/consultas.service';
import Swal from 'sweetalert2';
import { first } from 'rxjs';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {
  archivo = {
    matricula : "",
    nombreArchivo: null,
    base64textString: ""
  }

  image:any;
  userLogged=this.authService.getUserLogged();
  constructor(private authService: AuthService,private  _router: Router, private consultaService: ConsultasService) { }
  public data:any; // variable para almacenar los datos del usuario
  public nombre:String = ""; // variable para almacenar el nombre completo del susario
  public matricula:String="";
  public previsualizacion: boolean = false;

  ngOnInit(): void {
    this.data = this.consultaService.getData(); // En este apartado obtenemos el objeto JSON con los datos del usuario
    this.nombre = this.data.nombre +" " + this.data.paterno + " " + this.data.materno; // Almacenando el nombre del usuario
    this.matricula = this.data.matricula;
  }
  configurar(): void{
 
    this._router.navigateByUrl('/editar-perfil')
   
  
}

cambiarImagen(event:any){
  var files = event.target.files;
  var file = files[0];
  this.archivo.nombreArchivo = file.name;
  if(files && file) {
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(file);
    this.archivo.matricula = this.matricula.toString();
    this.previsualizacion = true;
  }
  
  
}
_handleReaderLoaded(readerEvent:any) {
  var binaryString = readerEvent.target.result;
  this.archivo.base64textString = btoa(binaryString).toString();
}

MandarFoto(){
  if(this.previsualizacion){
    this.consultaService.subirFoto(this.archivo)
    .subscribe(
      User=>{
        this.consultaService.saveData(JSON.stringify(User[0]));
        this.data = this.consultaService.getData(); // En este apartado obtenemos el objeto JSON con los datos del usuario
        this.nombre = this.data.nombre +" " + this.data.paterno + " " + this.data.materno; // Almacenando el nombre del usuario
        this.matricula = this.data.matricula;
        Swal.fire({
          icon: 'success',
          title: 'Perfil Actualizado',
          text: 'Tu foto de perfil se ha actualizado.',
          showConfirmButton: false,
          timer: 2500
        });
        this.abrirModal();
        setTimeout(
          function(){ 
          location.reload(); 
          }, 2500);
      });
  }
  else{
    Swal.fire({
      title: 'No seleccionaste imagen',
      text: 'Debes seleccionar una imagen valida.',
      icon: 'error',
    })
  }
}

abrirModal(){
  this.archivo.base64textString = "";
  this.archivo.matricula = "";
  this.archivo.nombreArchivo = null;
  this.previsualizacion = false;
}
}