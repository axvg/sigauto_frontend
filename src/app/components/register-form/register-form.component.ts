import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  form = new FormGroup({
    tipo_documento: new FormControl('', Validators.required), 
    numero_documento: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
    nombres: new FormControl('', [Validators.required, Validators.minLength(2)]),
    apellido_paterno: new FormControl('', [Validators.required, Validators.minLength(2)]),
    apellido_materno: new FormControl('', [Validators.required, Validators.minLength(2)]),
    fecha_nacimiento: new FormControl('', Validators.required),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
    email: new FormControl('', [Validators.email]),
    sexo: new FormControl('', Validators.required),
    direccion: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
