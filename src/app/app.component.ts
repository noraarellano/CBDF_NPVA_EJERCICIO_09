import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicio 09 - Interpolacion';
  nombre = 'Nora Patricia Vicente Arellano';
  edad = '21';
  semestre = 'Séptimo semestre';
  calificaciones = [8, 7, 15, 10, 8, 9, 8, 6];
  promedio = this.calcularpromedio();
  estado = this.estadoAlumno();

  calcularpromedio() {
    let suma = 0;
    const longuitudArreglo = this.calificaciones.length;
    for (let i = 0; i < longuitudArreglo; i++) suma += this.calificaciones[i];
    return suma / longuitudArreglo;
  }

  estadoAlumno() {
    if (this.calcularpromedio() >= 6) return 'Aprobado';
    else return 'No aprobado';
  }
}
