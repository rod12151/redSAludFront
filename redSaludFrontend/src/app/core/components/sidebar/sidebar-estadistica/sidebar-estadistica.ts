import { Component, input } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faBars,faHouseUser }  from  '@fortawesome/free-solid-svg-icons' 
interface MenuItem {
  icon: any;
  label: string;
}
@Component({
  selector: 'app-sidebar-estadistica',
  imports: [FontAwesomeModule],
  templateUrl: './sidebar-estadistica.html',
  styleUrl: './sidebar-estadistica.css'
})
export class SidebarEstadistica {
isCollapsed = input<boolean>(false);
  isMobile = input<boolean>(false);

  menuItems: MenuItem[] = [
    {
      icon: faHouseUser,
      label: 'Dashboard'
    },
    {
      icon: faBars,
      label: 'Usuarios'
    },
    {
      icon: faBars,
      label: 'Analytics'
    },
    {
      icon: faBars,
      label: 'Reportes'
    },
    {
      icon: faBars,
      label: 'Configuración'
    },
    {
      icon: faBars,
      label: 'Cerrar Sesión'
    },
    {
      icon: faBars,
      label: 'Mensajes',
    }
  ];
}
