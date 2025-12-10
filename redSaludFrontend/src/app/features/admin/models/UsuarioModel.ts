import { Puesto } from "./PuestoModel";

export interface Usuario {
    id?: number;
    dni: string;
    name: string;
    lastName: string;
    email: string;
    idPuesto: number;
    idRole: number;
}
export interface UsuarioResponse {
    id?: number;
    dni: string;
    name: string;
    lastName: string;
    username: string;
    puesto: Puesto;
    roles: rol[];
}

export interface rol{
    id: number;
    nombre: string;
}
