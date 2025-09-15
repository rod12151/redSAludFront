import { Component, OnInit, signal } from '@angular/core';
import { GraficoBarras } from '../../graficos/grafico-barras/grafico-barras';
import { indicadoresService } from '../../../../core/services/indicadores-service';
import { filtroBusquedaIndicadores, IndicadoresResponse } from '../../../../shared/models/datagrafico';

@Component({
  selector: 'app-barrido-sbr',
  imports: [GraficoBarras],
  templateUrl: './barrido-sbr.html',
  styleUrls: ['./barrido-sbr.css']
})
export class BarridoSBR implements OnInit {
  constructor(private datosService: indicadoresService) { }
  dataResponce = signal<IndicadoresResponse>({
    "labels": [],
    "values": []
  });

  filtros: filtroBusquedaIndicadores = {
    red: 'HUAMANGA',
    anio: '2024',
    mes: '6.0',
    microred: 'BELEN',
    ipress: 'HUASCAHURA'
  };

  // Opciones (puedes cargarlas del backend también)
  opcionesRed = ['HUAMANGA'];
  opcionesAnio = ['2022', '2023', '2024', '2025'];
  opcionesMes = ['1.0', '2.0', '3.0', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '11.0', '12.0'];

 

  ngOnInit(): void {
    this.buscar()
  }

  optenerIndicadores() {
    this.datosService.getIndicadores().subscribe({
      next: data => {
        this.dataResponce.set(data)
        console.log("datos en e barrido", this.dataResponce())
      },
      error: e => {
        console.error("error de indicadores", e)
      }
    })

  }

   buscar() {
    this.datosService.getData(this.filtros).subscribe({
      next:data=>{
        this.dataResponce.set(data)
      },
      error:e=>{
        console.error("erorr fue ps",e)
      }
    })
   
  }

}
