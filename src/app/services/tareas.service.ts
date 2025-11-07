import { Injectable } from '@angular/core';

export interface Tarea {
  id: number;
  title: string;
}

@Injectable({ providedIn: 'root' })
export class TareasService {
  private tareas: Tarea[] = [
    { id: 1, title: 'Comprar leche' },
    { id: 2, title: 'Aprender Angular' },
    { id: 3, title: 'Hacer ejercicio' },
  ];

  constructor() {}

  getTareas(): Tarea[] {
    // return a copy to avoid external mutation
    return [...this.tareas];
  }

  removeTarea(id: number) {
    this.tareas = this.tareas.filter((t) => t.id !== id);
  }
}
