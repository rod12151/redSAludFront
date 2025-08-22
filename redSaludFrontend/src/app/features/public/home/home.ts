import { Component} from '@angular/core';
import { CarrouselHome } from "./carrousel-home/carrousel-home";
import { SaludosDirectora } from "./saludos-directora/saludos-directora";

import { dependencia } from '../../../shared/models/dependencia';
import { DependeciasHome } from "./dependecias-home/dependecias-home";
import { CardPrimary } from '../../../shared/components/card-primary/card-primary';

@Component({
  selector: 'app-home',
  imports: [CarrouselHome, SaludosDirectora, CardPrimary],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home   {
  
       dependencias:dependencia[]=[
    {
      id:1,
      nombre:"DIRECCION EJECUTIVA",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi esse praesentium dignissimos ad tempore, nostrum quia eligendi sint cum, quam labore autem nemo molestias dolorum animi. Temporibus aliquid nulla aliquam?",
      image:"/images/carrousel/portada4.jpg"
    },
    {
      id:2,
      nombre:"OFICINA DE ADMINISTRACION",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi esse praesentium dignissimos ad tempore, nostrum quia eligendi sint cum, quam labore autem nemo molestias dolorum animi. Temporibus aliquid nulla aliquam?",
      image:"/images/carrousel/portada4.jpg"
    },
    {
      id:3,
      nombre:"OFICINA DE PLANEAMIENTO Y PRESUPUESTO",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi esse praesentium dignissimos ad tempore, nostrum quia eligendi sint cum, quam labore autem nemo molestias dolorum animi. Temporibus aliquid nulla aliquam?",
      image:"/images/carrousel/portada4.jpg"
    },
    {
      id:4,
      nombre:"OFICINA DE ESTADISTICA E INFORMATICA",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi esse praesentium dignissimos ad tempore, nostrum quia eligendi sint cum, quam labore autem nemo molestias dolorum animi. Temporibus aliquid nulla aliquam?",
      image:"/images/carrousel/portada4.jpg"
    },
    {
      id:5,
      nombre:"OFICINA DE ASEGURAMIENTO PUBLICO",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi esse praesentium dignissimos ad tempore, nostrum quia eligendi sint cum, quam labore autem nemo molestias dolorum animi. Temporibus aliquid nulla aliquam?",
      image:"/images/carrousel/portada4.jpg"
    }
    
    ]
  



  

}
