import { Component, signal } from '@angular/core';
import { PuestoUpdate } from './puesto-update/puesto-update';
import { PuestoCreate } from './puesto-create/puesto-create';
import { PuestoList } from "./puesto-list/puesto-list";
import { Puesto } from '../../models/PuestoModel';
import { PuestoService } from '../../services/puesto-service';

@Component({
  selector: 'app-puestos',
  imports: [PuestoUpdate, PuestoCreate, PuestoList],
  templateUrl: './puestos.html',
  styleUrl: './puestos.css'
})
export class Puestos {
  mostrarPanel = signal<boolean>(false);
  puestoSeleccionado = signal<Puesto|null>(null)
  modo = signal <'crear'| 'editar'|null>(null) 
  constructor(public puesto:PuestoService){

  }


  nuevoPuesto(){
    this.modo.set('crear')
    this.mostrarPanel.set(true)
    console.log("se muestra: crear puesto")
  }
  editarPuesto(puesto:Puesto){
    this.puestoSeleccionado.set(puesto)
    this.modo.set('editar')
    this.mostrarPanel.set(true)
    console.log('se muestra: editar puesto')
  }
  volverPuesto(){
    console.log("se guardó o se actualizo")
    this.modo.set(null)
    this.mostrarPanel.set(false)
  }
  noCambios(){
    console.log("no hubo cambios ")
    this.modo.set(null)
    this.mostrarPanel.set(false)
  }

}
