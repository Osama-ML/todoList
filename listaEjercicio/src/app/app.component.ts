import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas = [];
  tarea : string;
  estado: boolean;
}

// agregarTarea(){
//   this.tareas.push({
//     tarea: this.tarea,
//     estado: this.estado
//   })
// }