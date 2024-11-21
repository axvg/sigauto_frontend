import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';
import { TokenResponse } from '@models/token-response';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  router = inject(Router);

  login(email: string, password: string) {
    console.log('login service')
    return this.http.post<TokenResponse>(`${environment.url}/api/auth/login`, { email, password }).pipe(
      tap((res) => {
        localStorage.setItem('token', res?.token);
      })
    )
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
