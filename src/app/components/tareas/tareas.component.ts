import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  tareas: Tarea[] = []
  currentValue: string = ""

  addTarea() {
    console.log(this.currentValue)
    const tarea = new Tarea(this.currentValue, false)
    this.tareas.push(tarea)
    this.currentValue = ""
  }

  deleteTarea(tarea: Tarea) {
    this.tareas = this.tareas.filter(t => t != tarea)
  }

  updateTarea(tarea: Tarea) {
    tarea.estado = !tarea.estado
  }

}
