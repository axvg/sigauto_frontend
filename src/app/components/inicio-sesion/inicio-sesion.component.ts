import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.scss'
})
export class InicioSesionComponent {
  form = new FormGroup({
    dni: new FormControl('', Validators.required), 
    placaVehiculo: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

}