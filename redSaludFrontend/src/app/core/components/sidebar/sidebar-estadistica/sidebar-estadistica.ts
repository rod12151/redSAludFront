import { Component, input } from '@angular/core';
interface MenuItem {
  icon: string;
  label: string;
  active?: boolean;
  badge?: string;
}
@Component({
  selector: 'app-sidebar-estadistica',
  imports: [],
  templateUrl: './sidebar-estadistica.html',
  styleUrl: './sidebar-estadistica.css'
})
export class SidebarEstadistica {
isCollapsed = input<boolean>(false);
  isMobile = input<boolean>(false);

  menuItems: MenuItem[] = [
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
               <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2"/>
               <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="2"/>
             </svg>`,
      label: 'Dashboard',
      active: true
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
               <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2"/>
               <circle cx="8.5" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
               <path d="M20 8V14M23 11H17" stroke="currentColor" stroke-width="2"/>
             </svg>`,
      label: 'Usuarios'
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
               <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
               <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="2"/>
               <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="2"/>
             </svg>`,
      label: 'Analytics'
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
               <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2"/>
               <path d="M14 2V8H20" stroke="currentColor" stroke-width="2"/>
               <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2"/>
               <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2"/>
               <line x1="10" y1="9" x2="8" y2="9" stroke="currentColor" stroke-width="2"/>
             </svg>`,
      label: 'Reportes'
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
               <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
               <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="2"/>
             </svg>`,
      label: 'Configuración'
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
               <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" stroke-width="2"/>
               <path d="M16 17L21 12L16 7" stroke="currentColor" stroke-width="2"/>
               <path d="M21 12H9" stroke="currentColor" stroke-width="2"/>
             </svg>`,
      label: 'Cerrar Sesión'
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
               <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
               <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2"/>
             </svg>`,
      label: 'Mensajes',
      badge: '5'
    }
  ];
}
