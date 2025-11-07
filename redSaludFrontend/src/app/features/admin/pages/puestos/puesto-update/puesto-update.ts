import { Component, input, OnChanges, output, SimpleChanges } from '@angular/core';
import { Puesto } from '../../../models/PuestoModel';
import { PuestoService } from '../../../services/puesto-service';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-puesto-update',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './puesto-update.html',
  styleUrl: './puesto-update.css'
})
export class PuestoUpdate implements OnChanges {
  puesto = input.required<Puesto>()
  cancelar = output()
  actualizado = output()

  updatePuestoForm!: FormGroup;

  constructor(private puestoService:PuestoService){}

  ngOnChanges(changes: SimpleChanges): void {
    
    if(changes['puesto'] && this.puesto()){
      console.log(this.puesto())
      this.initPuestoForm();
    }
  }
  private initPuestoForm(){
    this.updatePuestoForm = new FormGroup({
      codigo: new FormControl(this.puesto().codigo, [Validators.required]),
      nombre: new FormControl(this.puesto().nombre,[Validators.required])
    })
  }
  get codigo(){
    return this.updatePuestoForm.get('codigo')
  }
  get nombre(){
    return this.updatePuestoForm.get('nombre')
  }

  actualizar(){
    const puestoupdate = this.updatePuestoForm.value
    this.puestoService.update(this.puesto().id,puestoupdate).subscribe(()=>{
      this.actualizado.emit();
    })
    

  }
  cancelado(){
    console.log("cancelado")
    this.cancelar.emit()
  }

}
