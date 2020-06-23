import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas: string[] = []; //tipamos el array de strings e inicializamos
  tarea: string = "";     //tipamos como string e inicializamos
  hoy = new Date();       //creamos una variable donde guardamos los datos

  fechaFunction(){
    // creamos fecha actual
    let fecha = this.hoy.getDate() + '/' + (this.hoy.getMonth()+1) + '/' + this.hoy.getFullYear();
    console.log(fecha);
    // creamos la hora actual
    let hora = this.hoy.getHours() + ':' + this.hoy.getMinutes() + ':' + this.hoy.getSeconds();
    console.log(hora);
    return ` Fecha: ${fecha} y hora: ${hora} `;
  }

  addActivity(){

    // funcion para agregar cosas al array

    this.tareas.push(this.tarea); 
  }

  deleteMe(activity:string){

    // filtramos para que nos duelva todos los valores menos el que no queremos

    this.tareas = this.tareas.filter(i => i != activity); 
    
  }

}
