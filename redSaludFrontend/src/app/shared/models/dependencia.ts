import { Persona } from "./persona";

export interface Dependencia{
    id:number;
    nombre:String;
    descripcion:String;
    image:String;
    oficinas:oficinas[];
    jefeDependencia:Persona;
}
export interface oficinas{
    id:number;
    idDependencia:number;
    nombre:String;
    descripcion:String;
    image:String;
}