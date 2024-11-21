import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterCitaService {
  http = inject(HttpClient);
  router = inject(Router);

  constructor() { }
}
