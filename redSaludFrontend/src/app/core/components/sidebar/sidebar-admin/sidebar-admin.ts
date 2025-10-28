import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterLinkActive } from '@angular/router';
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
  isCollapsed = input<boolean>(false);
  isMobile = input<boolean>(false);
 menuItems: MenuItem[] = [
  {
    icon:faFileExcel,
    label:'Cargar Excel',
    ruta:'/admin/cargarData'
  },
   {
    icon:faFileExcel,
    label:'crear usuario',
    ruta:'/admin/usuario'
  },
   {
    icon:faFileExcel,
    label:'Cargar Excel',
    ruta:'/admin/cargarData'
  }, {
    icon:faFileExcel,
    label:'Cargar Excel',
    ruta:'/admin/cargarData'
  }
 ]
}
