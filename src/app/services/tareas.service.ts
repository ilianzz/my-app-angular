import { Injectable } from '@angular/core';

export interface Tarea {
  id: number;
  title: string;
}

const STORAGE_KEY = 'mis_tareas_v1';

@Injectable({ providedIn: 'root' })
export class TareasService {
  private tareas: Tarea[] = [];

  constructor() {
    this.load();
    if (this.tareas.length === 0) {
      // seed defaults
      this.tareas = [
        { id: 1, title: 'Comprar leche' },
        { id: 2, title: 'Aprender Angular' },
        { id: 3, title: 'Hacer ejercicio' },
      ];
      this.save();
    }
  }

  private save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tareas));
    } catch (e) {
      // if localStorage not available, swallow silently (app still works in-memory)
      console.warn('No se pudo guardar tareas en localStorage', e);
    }
  }

  private load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        this.tareas = JSON.parse(raw) as Tarea[];
      } else {
        this.tareas = [];
      }
    } catch (e) {
      this.tareas = [];
    }
  }

  getTareas(): Tarea[] {
    return [...this.tareas];
  }

  addTarea(title: string): Tarea {
    const nextId = this.tareas.length > 0 ? Math.max(...this.tareas.map((t) => t.id)) + 1 : 1;
    const nueva: Tarea = { id: nextId, title: title };
    this.tareas = [...this.tareas, nueva];
    this.save();
    return nueva;
  }

  removeTarea(id: number) {
    this.tareas = this.tareas.filter((t) => t.id !== id);
    this.save();
  }
}
