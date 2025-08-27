import { Component, OnInit, signal } from '@angular/core';
import { Dependencia } from '../../../shared/models/dependencia';
import { DependeciasHome } from "../home/dependecias-home/dependecias-home";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { DependenciaService } from '../../../core/services/dependencia-service';
import e from 'express';

@Component({
  selector: 'app-dependencias',
  imports: [DependeciasHome, FontAwesomeModule],
  templateUrl: './dependencias.html',
  styleUrl: './dependencias.css'
})
export class Dependencias implements OnInit {
  faCoffee = faCoffee;
  isOpen = false;

  dataResponseDependencia = signal<Dependencia[]>([])

  constructor(private dependenciaService: DependenciaService) { }

  ngOnInit(): void {
    this.optenerdependencias()
  };


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