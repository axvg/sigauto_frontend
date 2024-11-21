import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  getDecodedToken(token: string): any {
    return atob(token.split('.')[1])
  }

  getEmail(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedTokenString = this.getDecodedToken(token);
      const decodedTokenJson = JSON.parse(decodedTokenString);
      const { sub, iat, exp } = decodedTokenJson;
      if (sub) {
        return sub;
      }
      return 'user@mail.com'
    }
    return null;
  }
}
