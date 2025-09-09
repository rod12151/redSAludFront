import { Routes } from '@angular/router';
import { DashboardEstadisticaLayout } from './dashboard-estadistica-layout';
import { Dashboard } from '../../../features/dashboard/dashboard';

export const DASHBOARD_ESTADISTICA_LAYOUT_RUTES:Routes = [
    {path:'', component:DashboardEstadisticaLayout, children:[

        {path:'',component:Dashboard},
        
    ]},]