import { Component, input } from '@angular/core';
import { IndicadoresResponse } from '../../models/datagrafico';

@Component({
  selector: 'app-tabla-indicador',
  imports: [],
  templateUrl: './tabla-indicador.html',
  styleUrl: './tabla-indicador.css'
})
export class TablaIndicador {
  dataIndicadorResponse = input.required<IndicadoresResponse>();
  cantidad:number[]=[0,1,2,3,4,5];

}
