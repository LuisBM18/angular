import { Component, OnInit } from '@angular/core';

import { Administrador } from './interfaces/Administrador';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MinimarketBelu';
  public loginAdmin: Administrador[]=[];
  public administrador1 : Administrador = {
    Correo: "",
    Password: "",

  }
  Acceder(): void {
    this.loginAdmin.push(this.administrador)
    console.log(this.administrador);
  }
  ListaAdmin: Administrador[]=[this.administrador1];
  public administrador:Administrador=this.AdministradorVacio();
  public posicion: number = -1
  Agregar(): void {
    if(this.posicion == -1){
    this.ListaAdmin.push(this.administrador1);
    this.administrador1= this.AdministradorVacio();
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
    this.administrador1.Correo = selectAdministrador.Correo;
    this.administrador1.Password = selectAdministrador.Password;
    this.posicion = i;
    console.table(this.ListaAdmin)
  };
}
