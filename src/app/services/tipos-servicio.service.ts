import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiposServicioService {
  servicios = [
    {
      id: 1,
      name: 'MANTENIMIENTO'
    },
    {
      id: 2,
      name: 'REVISIÓN'
    },
    {
      id: 3,
      name: 'CAMBIO DE ACEITE'
    },
    {
      id: 4,
      name: 'CAMBIO DE FILTRO'
    },
    {
      id: 5,
      name: 'CAMBIO DE LLANTAS'
    },
  ]

  getServicioById(id: number) {
    return this.servicios.find(servicio => servicio.id === id);
  }
}
