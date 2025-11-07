import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasService, Tarea } from '../services/tareas.service';
import { CapitalizePipe } from '../pipes/capitalize.pipe';


@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule, CapitalizePipe, FormsModule],
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent {
  tareas: Tarea[] = [];
  newTitle: string = '';

  constructor(private tareasService: TareasService) {
    this.loadTareas();
  }

  loadTareas() {
    this.tareas = this.tareasService.getTareas();
  }

  eliminar(id: number) {
    this.tareasService.removeTarea(id);
    this.loadTareas();
  }

  agregar() {
    const title = this.newTitle?.trim();
    if (!title) return;
    this.tareasService.addTarea(title);
    this.newTitle = '';
    this.loadTareas();
  }
}
