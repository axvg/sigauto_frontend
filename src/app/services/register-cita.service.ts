import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterCitaService {
  http = inject(HttpClient);
  router = inject(Router);
  
  register(registerCitaData: RegisterCitaModel) {
    return this.http.post(`${environment.url}/api/citas`, registerCitaData).pipe(
      tap((res) => {
        console.log('Register Cita response', res);
      }),
      tap(() => {
        this.router.navigate(['/citas-history']);
      })
    );
  }

}
