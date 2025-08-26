export interface dependencia{
    id:number;
    nombre:String;
    descripcion:String;
    image:String;
    oficinas:oficinas[]
}
export interface oficinas{
    id:number;
    idDependencia:number;
    nombre:String;
    descripcion:String;
    image:String;
}