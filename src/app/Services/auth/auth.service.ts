import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { ConsultasService } from '../consultas.service';

import firebase  from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth : AngularFireAuth, private ajax:ConsultasService) { }

  async login(email:string,pass:string) {

    try {
      return await this.afauth.signInWithEmailAndPassword(email, pass);
    } catch (err) {
      console.log("Error en el login",err);
      return null;
    }
    
  }

  async loginWithGoogle() {

    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err) {
      console.log("Error en el login de google",err);
      return null;
    }
    
  }


  getUserLogged(){
    return this.afauth.authState;
  }

  logOut(){
    this.afauth.signOut();
    this.ajax.deleteData();
  }

}
