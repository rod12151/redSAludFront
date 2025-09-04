import { Persona } from "./persona";

export interface Dependencia{
    id:number;
    nombre:String;
    descripcion:String;
    image:String;
    oficinas:oficina[];
    jefeDependencia:Persona;
}
export interface oficina{
    id:number;
    idDependencia:number;
    nombre:String;
    descripcion:String;
    image:String;
}