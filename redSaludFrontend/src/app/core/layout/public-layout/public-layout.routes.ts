import { Routes } from "@angular/router";
import { PublicLayout } from "./public-layout";
import { Home } from "../../../features/public/home/home";
import { Nosotros } from "../../../features/public/nosotros/nosotros";
import { Convocatorias } from "../../../features/public/convocatorias/convocatorias";
import { Programas } from "../../../features/public/programas/programas";
import { Sgd } from "../../../features/public/sgd/sgd";
import { DependenciaDetalle } from "../../../features/public/dependencias/dependencia-detalle/dependencia-detalle";

export const PUBLIClAYOUT_RUTES:Routes = [
    {path:'', component:PublicLayout, children:[

        {path:'',component:Home},
        {path:'nosotros',component:Nosotros},
        {path:'dependencias',loadChildren:() => import('../../../features/public/dependencias/dependencias.routes')
            .then(m=>m.DEPENDENCIAS_RUTES),
        },
        {path:'convocatorias',component:Convocatorias},
        {path:'programas',component:Programas},
        {path:'sgdRedHuamanga',component:Sgd}
    ]},
    
]