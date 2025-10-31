import { Routes } from '@angular/router';
import { DashboardAdminLayout } from './components/dashboard-admin-layout/dashboard-admin-layout';
import { Admin } from './admin';
import { CargarData } from './pages/cargar-data/cargar-data';
import { authGuard } from '../../core/guards/auth-guard';
import { UsuarioComponent } from './pages/usuarios/usuario';
import { Puestos } from './pages/puestos/puestos';

export const DASHBOARD_ADMIN_LAYOUT_RUTES: Routes = [
    {
        path: '',
        component: DashboardAdminLayout,
        canActivate:[authGuard],
        data: {roles:['SUPER_ADMIN']},
        children: [
            { path: '', component: Admin },
            { path: 'cargarData', component: CargarData },
            { path: 'usuario', component:UsuarioComponent},
            { path: 'puesto', component:Puestos}
        ]
    }
    ,]