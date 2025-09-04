import { Component, Input, OnInit, signal } from '@angular/core';
import { Dependencia } from '../../../../shared/models/dependencia';
import { DependenciaService } from '../../../../core/services/dependencia-service';

@Component({
  selector: 'app-dependencia-home',
  imports: [],
  templateUrl: './dependencia-home.html',
  styleUrl: './dependencia-home.css'
})
export class DependenciaHome implements OnInit{
  constructor(
    private dependenciaService:DependenciaService
  ){}
  ngOnInit(): void {
    this.optenerdependencias()
  }
  dataResponseDependencia = signal<Dependencia[]>([])
 
 
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
 
    isPar(number:number){
      if(number%2==0){
        return true
      }
      return false
    }

}
