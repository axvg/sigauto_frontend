import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicle-registration',
  standalone: true, // Componente independiente
  templateUrl: './vehicle-registration.component.html',
  styleUrls: ['./vehicle-registration.component.scss'],
  imports: [CommonModule, ReactiveFormsModule] 
})
export class VehicleRegistrationComponent {
  vehicleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.vehicleForm = this.fb.group({
      placa: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      fecha: ['', Validators.required],
      comentarios: ['']
    });
  }

  onSubmit() {
    if (this.vehicleForm.valid) {
      console.log(this.vehicleForm.value);
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }

  onBack() {
    alert('Volviendo...');
  }
}

