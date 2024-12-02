import { Cliente } from './cliente';

export interface Vehiculo {
    idVehiculo: number;
    marca: string;
    modelo: string;
    year: number;
    placa: string;
    cliente: Cliente;
    createdAt?: Date;
    updatedAt?: Date;
}