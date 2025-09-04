import { Component, inject, Input, OnInit, signal, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dependencia } from '../../../../shared/models/dependencia';
import { DependenciaService } from '../../../../core/services/dependencia-service';
import { fitrarDependeciaPorId } from '../../../../shared/utils/filter';
import { CardOficina } from '../../../../shared/components/card-oficina/card-oficina';
@Component({
  selector: 'app-dependencia-detalle',
  imports: [CardOficina],
  templateUrl: './dependencia-detalle.html',
  styleUrl: './dependencia-detalle.css'
})
export class DependenciaDetalle implements OnInit {
  private activateRouter = inject(ActivatedRoute)
  private dependeciaService = inject(DependenciaService)
  dataDependencias = signal<Dependencia>({
    "id": 8,
    "nombre": "Oficina de Investigación y Desarrollo",
    "descripcion": "Impulsa proyectos de innovación y mejora continua para fortalecer la gestión institucional.",
    "image": "/images/carrousel/portada4.jpg",
    "oficinas": [
      {
        "id": 8,
        "idDependencia": 8,
        "nombre": "Oficina de Innovación",
        "descripcion": "Promueve iniciativas de innovación tecnológica y de gestión.",
        "image": "/images/carrousel/portada2.jpg"
      }
    ],
    "jefeDependencia": {
      "id": 8,
      "nombre": "Sofía",
      "apellidos": "Ramos Delgado",
      "correo": "sofia.ramos@institucion.gob.pe",
      "profesion": "Investigadora",
      "fechaNacimiento": "1992-04-27"
    }
  })
  dataresponse?: Dependencia;
  id = signal<number>(0);

  ngOnInit(): void {
    console.log("ide al inicio"+ this.id)
    this.activateRouter.paramMap.subscribe(params => {
      this.id.set(Number(params.get('id')));
      this.optenerdependencias(this.id())  
    });
    
  }

  optenerdependencias(id:number) {
    this.dependeciaService.obtenerDependencias.subscribe({
      next: data => {
        
          this.dataresponse = fitrarDependeciaPorId(data, id)[0]
          this.dataDependencias.set(this.dataresponse);

        

      },
      error: e => {
        console.error(e)
      }
    })
  };

}
