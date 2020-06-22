import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas: string[] = [];
  tarea: string = "";
  
  addActivity(){

    // funcion para agregar cosas al array

    this.tareas.push(this.tarea); 
  }

  deleteMe(activity:string){

    // filtramos para que nos duelva todos los valores menos el que no queremos

    this.tareas = this.tareas.filter(i => i != activity); 
    
  }

}
