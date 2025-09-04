import { Routes } from "@angular/router";
import { Dependencias } from "./dependencias";
import { DependenciaDetalle } from "./dependencia-detalle/dependencia-detalle";
import { DependenciaHome } from "./dependencia-home/dependencia-home";

export const DEPENDENCIAS_RUTES:Routes = [
    {path:'',component:Dependencias,children:[
        {path:'',component:DependenciaHome},
        {path:':id',component:DependenciaDetalle}
    ]}

]