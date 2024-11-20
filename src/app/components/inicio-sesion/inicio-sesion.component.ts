import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.scss'
})
export class InicioSesionComponent {
  authService = inject(AuthService);

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  login() {
    console.log(this.form.value);

    if (this.form.invalid) {
      console.log('form invalid')
      return;
    }

    if (!this.form.value.email || !this.form.value.password) {
      console.log('email or password missing')
      return;
    }

    this.authService.login(this.form.value.email, this.form.value.password).subscribe(
      response => {
        console.log('Login successful', response);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}