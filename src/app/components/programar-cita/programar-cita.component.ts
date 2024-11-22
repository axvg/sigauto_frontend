import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-programar-cita',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './programar-cita.component.html',
  styleUrls: ['./programar-cita.component.scss']
})
export class ProgramarCitaComponent {
  appointmentForm: FormGroup; // Define la propiedad 'appointmentForm'

  constructor(private fb: FormBuilder) {
    // Inicializa el formulario con los campos y validaciones
    this.appointmentForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      vehiculo: ['', Validators.required],
      servicio: ['', Validators.required],
      fechaHora: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value);
      alert('Cita reservada exitosamente');
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }

  onBack() {
    alert('Regresando...');
  }
}

