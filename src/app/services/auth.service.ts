import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  login(email: string, password: string) {
    console.log('login service')
    return this.http.post(`${environment.url}/api/auth/login`, { email, password });
  }
}
