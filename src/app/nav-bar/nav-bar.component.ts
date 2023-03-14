import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/Services/auth/auth.service';
import { ConsultasService } from 'app/Services/consultas.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService, private ajax: ConsultasService, private _router: Router) { }

  public userLogged:any; //Variable para verificar si hay un usuario logeado
  public data:any; // Variable para almacenar los datos del usuario
  public name:any; // Variable para almacenar el nombre del usuario
  public picture: any;

  ngOnInit(): void {
    this.ajax.userLogged.subscribe((valuData)=>{
      this.userLogged = valuData;
    }
    );
    this.ajax.name.subscribe((nom)=>{
      this.name = nom;
    })
    this.ajax.foto.subscribe((foto)=>{
      this.picture = foto;
    })
  }
  logOut(){
    this.ajax.deleteData();
    //this.authService.logOut();
  }

  goTo(){
    if (this.ajax.validator()){
      const data = this.ajax.getData();
      if (data.tipo == "0") {
        this._router.navigateByUrl("/maestro");
      }
      else{
        this._router.navigateByUrl("/estudiante");
      }
    }
    else{
      this._router.navigateByUrl("/home")
    }
  }

}
