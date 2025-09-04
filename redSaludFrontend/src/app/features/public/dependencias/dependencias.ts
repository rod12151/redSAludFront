import { Component, inject, OnInit, signal } from '@angular/core';
import { Dependencia } from '../../../shared/models/dependencia';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterLinkActive, RouterOutlet,RouterLink } from '@angular/router';
import { DependenciaService } from '../../../core/services/dependencia-service';

@Component({
  selector: 'app-dependencias',
  imports: [RouterOutlet, FontAwesomeModule, RouterLinkActive, RouterLink],
  templateUrl: './dependencias.html',
  styleUrl: './dependencias.css'
})
export class Dependencias implements OnInit{
  private router = inject(Router)
  private dependenciaService = inject(DependenciaService)
  dataResponseDependencia = signal<Dependencia[]>([])
  
  isOpen = true;

ngOnInit(): void {
  this.optenerdependencias()
  
}

  iconMunuRight = faAnglesRight;
  iconMunuLeft = faAnglesLeft;


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

  detalleDependencia(id: number) {
    if (id != undefined) {
      console.log(`dependencias/${id}`)
      this.router.navigate([`dependencias/${id}`])


    }
  }





}