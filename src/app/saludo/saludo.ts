import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TareasComponent } from '../tareas/tareas.component';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [FormsModule, CommonModule, TareasComponent],
  templateUrl: './saludo.html',
  styleUrls: ['./saludo.css']
})
export class SaludoComponent {
  nombreInput: string = '';
  nombre: string = '';

  submitNombre() {
    this.nombre = this.nombreInput.trim();
  }
}
