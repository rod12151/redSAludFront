import { Component, output } from '@angular/core';
import { Puesto } from '../../../models/PuestoModel';
import { PuestoService } from '../../../services/puesto-service';
@Component({
  selector: 'app-puesto-list',
  imports: [],
  templateUrl: './puesto-list.html',
  styleUrl: './puesto-list.css'
})
export class PuestoList {
  editar= output<Puesto>()
  constructor(public puestoService:PuestoService){
    puestoService.getAll()
  }

  eliminar(id:number){
    if(confirm('¿seguro deseas eliminara este puesto?')){
      this.puestoService.delete(id).subscribe(()=>this.puestoService.getAll());
    }
  }

}
