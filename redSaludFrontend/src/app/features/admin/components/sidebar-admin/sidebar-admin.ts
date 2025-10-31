import { Component, inject, input, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserAlt,faUpload, faUsers,faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UsuarioService } from '../../services/usuario-service';
import { AuthService } from '../../../auth/services/auth.service';
interface MenuItem {
  icon: any;
  label: string;
  ruta:string;
}
@Component({
  selector: 'app-sidebar-admin',
  imports: [FontAwesomeModule,RouterLink,RouterLinkActive],
  templateUrl: './sidebar-admin.html',
  styleUrl: './sidebar-admin.css'
})
export class SidebarAdmin {
  user =inject(AuthService)
  isCollapsed = input<boolean>(false);
  isMobile = input<boolean>(false);
  iconPerfil=faUserAlt
 menuItems: MenuItem[] = [
  
   {
    icon:faUsers,
    label:'Administrar Usuarios',
    ruta:'/admin/usuario'
  },
   {
    icon:faBriefcase,
    label:'Administrar Puestos',
    ruta:'/admin/puesto'
  }, {
    icon:faUpload,
    label:'Cargar Datos',
    ruta:'/admin/cargarData'
  }
 ]
}
