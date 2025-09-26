import { Routes } from '@angular/router';

export const routes: Routes = [

    
    {
        path:'',
        loadChildren:()=>import('./core/layout/public-layout/public-layout.routes')
        .then(m=>m.PUBLIClAYOUT_RUTES),
    },
    {
        path:'estadistica',
        loadChildren:() => import('./core/layout/dashboard-estadistica-layout/dashboard-estadistica-layout.routes')
        .then(m=>m.DASHBOARD_ESTADISTICA_LAYOUT_RUTES)

    },
    {
        path:'admin',
        loadChildren:() => import('./core/layout/dashboard-admin-layout/dashboard-admin-layout.routes')
        .then(m=>m.DASHBOARD_ADMIN_LAYOUT_RUTES)

    },
    




];
