import { Component, OnInit, signal} from '@angular/core';
import { GraficoBarras } from '../../graficos/grafico-barras/grafico-barras';
import { indicadoresService } from '../../../../core/services/indicadores-service';
import { IndicadoresResponse } from '../../../../shared/models/datagrafico';

@Component({
  selector: 'app-barrido-sbr',
  imports: [ GraficoBarras ],
  templateUrl: './barrido-sbr.html',
  styleUrl: './barrido-sbr.css'
})
export class BarridoSBR  implements OnInit{
  constructor(private datosService:indicadoresService){}
  dataResponce=signal<IndicadoresResponse>({"labels": [],
  "values": []});

  ngOnInit(): void {
    this.optenerIndicadores()
  }

  optenerIndicadores(){
    this.datosService.getIndicadores().subscribe({
      next:data=>{
        this.dataResponce.set(data)
      },
      error: e =>{
        console.error(e)
      }
    })

  }
  
}
