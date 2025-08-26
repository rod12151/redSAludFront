import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.routes')
            .then(m => m.DASHBOARD_ROUTES),
    },
    
    {
        path:'',
        loadChildren:()=>import('./core/layout/public-layout/public-layout.routes')
        .then(m=>m.PUBLIClAYOUT_RUTES),
    },
    




];
