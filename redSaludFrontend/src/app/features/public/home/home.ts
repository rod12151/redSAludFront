import { Component, OnInit, signal } from '@angular/core';
import { CarrouselHome } from "./carrousel-home/carrousel-home";
import { SaludosDirectora } from "./saludos-directora/saludos-directora";

import { dependencia } from '../../../shared/models/dependencia';
import { DependeciasHome } from "./dependecias-home/dependecias-home";
import { CardPrimary } from '../../../shared/components/card-primary/card-primary';
import { DependenciaService } from '../../../core/services/dependencia-service';

@Component({
  selector: 'app-home',
  imports: [CarrouselHome, SaludosDirectora, CardPrimary],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  dataResponseDependencia = signal<dependencia[]>([])
  constructor(private dependenciaService: DependenciaService) { }

  

  ngOnInit(): void {
    this.optenerdependencias()

  }
  optenerdependencias() {
    this.dependenciaService.obtenerDependencias.subscribe({
      next: dataresponse => {
        this.dataResponseDependencia.set(dataresponse)
      },
      error: e => {
        console.error(e)
      }
    })
  };
 
  







}
