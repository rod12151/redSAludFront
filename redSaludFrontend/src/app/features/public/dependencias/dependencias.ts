import { Component } from '@angular/core';
import { dependencia } from '../../../shared/models/dependencia';
import { DependeciasHome } from "../home/dependecias-home/dependecias-home";

@Component({
  selector: 'app-dependencias',
  imports: [DependeciasHome],
  templateUrl: './dependencias.html',
  styleUrl: './dependencias.css'
})
export class Dependencias {
  isOpen=false
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
