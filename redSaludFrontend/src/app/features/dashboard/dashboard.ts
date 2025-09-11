import { Component, signal } from '@angular/core';
import {  faHouseUser,
  faSyringe,faUserDoctor,
  faUsersViewfinder,faSquareVirus,
  faSquarePersonConfined,faAward,
  faUserInjured,faBaby,faEarthAmericas,
  faBookAtlas,faChartBar,faBug,faBook }  from  '@fortawesome/free-solid-svg-icons'
import { FaIconComponent } from "@fortawesome/angular-fontawesome"; 
@Component({
  selector: 'app-dashboard',
  imports: [FaIconComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  stats = signal([{
        icon: faHouseUser,
        label: 'Dashboard',
        descripcion: '/estadistica'
      },
      {
        icon: faSyringe,
        label: 'Barrido SBR',
        descripcion: '/estadistica/barrido_SBR'
      },
      {
        icon: faUserDoctor,
        label: 'Profesionales',
        descripcion: '/estadistica/profesionales'
      },
      {
        icon: faUsersViewfinder,
        label: 'Digitadores',
        descripcion: '/estadistica/digitadores'
      },
      {
        icon: faSquareVirus,
        label: 'Morbilidad',
        descripcion: '/estadistica/morbilidad'
      },
      {
        icon: faSquarePersonConfined,
        label: 'Mortalidad',
         descripcion: '/estadistica/mortalidad'
      },
      
      {
        icon: faAward,
        label: 'Estrategias',
         descripcion: '/estadistica/estrategias'
      },
      {
        icon: faUserInjured,
        label: 'Paralisis Flácida',
         descripcion: '/estadistica/paralisis_flacida'
      },
      {
        icon: faBaby,
        label: 'Convenio FED',
         descripcion: '/estadistica/convenio_FED'
      },
      {
        icon: faEarthAmericas,
        label: 'Poblacion',
         descripcion: '/estadistica/poblacion'
      },
      {
        icon: faBookAtlas,
        label: 'Manuales HIS',
         descripcion: '/estadistica/manuales_HIS'
      },
      {
        icon: faChartBar,
        label: 'Atenciones',
         descripcion: '/estadistica/atenciones'
      },
      {
        icon: faBug,
        label: 'Inconcistencias',
         descripcion: '/estadistica/inconcistencias'
      },
      {
        icon: faBook,
        label: 'Catalogos',
         descripcion: '/estadistica/catalogos'
      }
  ]);

}
