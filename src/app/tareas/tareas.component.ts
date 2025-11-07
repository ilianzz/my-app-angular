import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasService, Tarea } from '../services/tareas.service';
import { CapitalizePipe } from '../pipes/capitalize.pipe';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent {
  tareas: Tarea[] = [];

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
}
