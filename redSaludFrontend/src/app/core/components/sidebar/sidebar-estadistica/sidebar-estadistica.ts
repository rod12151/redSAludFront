import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faHouseUser,
  faSyringe,faUserDoctor,
  faUsersViewfinder,faSquareVirus,
  faSquarePersonConfined,faAward,
  faUserInjured,faBaby,faEarthAmericas,
  faBookAtlas,faChartBar,faBug,faBook }  from  '@fortawesome/free-solid-svg-icons' 

interface MenuItem {
  icon: any;
  label: string;
  ruta:string;
}
@Component({
  selector: 'app-sidebar-estadistica',
  imports: [FontAwesomeModule,RouterLink, RouterLinkActive],
  templateUrl: './sidebar-estadistica.html',
  styleUrl: './sidebar-estadistica.css'
})
export class SidebarEstadistica {
isCollapsed = input<boolean>(false);
  isMobile = input<boolean>(false);

  menuItems: MenuItem[] = [
    {
      icon: faHouseUser,
      label: 'Dashboard',
      ruta: '/estadistica'
    },
    {
      icon: faSyringe,
      label: 'Barrido SBR',
      ruta: '/estadistica/barrido_SBR'
    },
    {
      icon: faUserDoctor,
      label: 'Profesionales',
      ruta: '/estadistica/profesionales'
    },
    {
      icon: faUsersViewfinder,
      label: 'Digitadores',
      ruta: '/estadistica/digitadores'
    },
    {
      icon: faSquareVirus,
      label: 'Morbilidad',
      ruta: '/estadistica/morbilidad'
    },
    {
      icon: faSquarePersonConfined,
      label: 'Mortalidad',
       ruta: '/estadistica/mortalidad'
    },
    
    {
      icon: faAward,
      label: 'Estrategias',
       ruta: '/estadistica/estrategias'
    },
    {
      icon: faUserInjured,
      label: 'Paralisis Flácida',
       ruta: '/estadistica/paralisis_flacida'
    },
    {
      icon: faBaby,
      label: 'Convenio FED',
       ruta: '/estadistica/convenio_FED'
    },
    {
      icon: faEarthAmericas,
      label: 'Poblacion',
       ruta: '/estadistica/poblacion'
    },
    {
      icon: faBookAtlas,
      label: 'Manuales HIS',
       ruta: '/estadistica/manuales_HIS'
    },
    {
      icon: faChartBar,
      label: 'Atenciones',
       ruta: '/estadistica/atenciones'
    },
    {
      icon: faBug,
      label: 'Inconcistencias',
       ruta: '/estadistica/inconcistencias'
    },
    {
      icon: faBook,
      label: 'Catalogos',
       ruta: '/estadistica/catalogos'
    }
  ];
}
