import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConsultasService } from 'app/Services/consultas.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canGuar:boolean = false;

  constructor( private ajax:ConsultasService ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.ajax.userLogged.subscribe((data)=>{
      this.canGuar = data;
      console.log(this.canGuar);
    });
    return this.canGuar;
  }
  
}
