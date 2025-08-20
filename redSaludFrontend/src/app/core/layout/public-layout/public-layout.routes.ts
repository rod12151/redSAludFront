import { Routes } from "@angular/router";
import { PublicLayout } from "./public-layout";
import { Home } from "../../../features/public/home/home";
import { Nosotros } from "../../../features/public/nosotros/nosotros";
import { Dependencias } from "../../../features/public/dependencias/dependencias";
import { Convocatorias } from "../../../features/public/convocatorias/convocatorias";
import { Programas } from "../../../features/public/programas/programas";
import { Sgd } from "../../../features/public/sgd/sgd";

export const PUBLIClAYOUT_RUTES:Routes = [
    {path:'', component:PublicLayout, children:[

        {path:'',component:Home},
        {path:'nosotros',component:Nosotros},
        {path:'dependencias',component:Dependencias},
        {path:'convocatorias',component:Convocatorias},
        {path:'programas',component:Programas},
        {path:'sgdRedHuamanga',component:Sgd}
    ]},
    
]