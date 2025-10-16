import { Routes } from '@angular/router';
import { DashboardAdminLayout } from './dashboard-admin-layout';
import { Admin } from '../../../features/admin/admin';
import { CargarData } from '../../../features/admin/pages/cargar-data/cargar-data';
import { authGuard } from '../../guards/auth-guard';

export const DASHBOARD_ADMIN_LAYOUT_RUTES: Routes = [
    {
        path: '',
        component: DashboardAdminLayout,
        canActivate:[authGuard],
        children: [
            { path: '', component: Admin },
            { path: 'cargarData', component: CargarData }
        ]
    }
    ,]