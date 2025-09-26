import { Routes } from '@angular/router';
import { DashboardAdminLayout } from './dashboard-admin-layout';
import { Admin } from '../../../features/admin/admin';
import { CargarData } from '../../../features/admin/pages/cargar-data/cargar-data';

export const DASHBOARD_ADMIN_LAYOUT_RUTES:Routes = [
    {path:'', component:DashboardAdminLayout, children:[
        {path:'',component:Admin},
        {path:'cargarData',component:CargarData}
        
        
    ]},]