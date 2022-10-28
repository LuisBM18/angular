import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Administrador } from './interfaces/Administrador';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MinimarketBelu';
  // public loginAdmin: Administrador[]=[];
  public administrador1 : Administrador = {
    id: 1,
    Correo: "zxc",
    Password: "xzc",
  }
  public administrador2 : Administrador = {
    id: 2,
    Correo: "zadsxc",
    Password: "xzcadssda",
  }
  ListaAdmin: Administrador[]=[this.administrador1, this.administrador2];
  Acceder(): void {
    this.ListaAdmin.push(this.administrador)
    console.log(this.administrador);
  }
  public administrador:Administrador=this.AdministradorVacio();
  public posicion: number = -1
  Agregar(): void {
    if(this.posicion == -1){
    this.ListaAdmin.push(this.administrador);
    this.administrador= this.AdministradorVacio();
    console.log("Hay:",this.ListaAdmin.length,"administradores")
    console.table(this.ListaAdmin)
    }
    else{
      let selectAdministrador: Administrador =  this.ListaAdmin[this.posicion];
      selectAdministrador.Correo = this.administrador.Correo;
      selectAdministrador.Password = this.administrador.Password;
      this.administrador = this.AdministradorVacio();
      this.posicion = +1;
      console.table(this.ListaAdmin)
    }
}
  AdministradorVacio(): Administrador{
  return{
    id: 0,
    Correo: "",
    Password: "",
  };
}
   eliminar(i: number):void{
    this.ListaAdmin.splice(i,1);
    console.table(this.ListaAdmin)
   }

   editar(i: number):void{
    let selectAdministrador: Administrador =  this.ListaAdmin[i];
    this.administrador.Correo = selectAdministrador.Correo;
    this.administrador.Password = selectAdministrador.Password;
    this.posicion = i;
    console.table(this.ListaAdmin)
  };
}
