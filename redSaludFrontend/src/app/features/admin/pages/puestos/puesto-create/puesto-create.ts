import { Component, inject, output, signal } from '@angular/core';
import { Puesto } from '../../../models/PuestoModel';
import { PuestoService } from '../../../services/puesto-service';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-puesto-create',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './puesto-create.html',
  styleUrl: './puesto-create.css'
})
export class PuestoCreate {
  cancelar = output();
  guardado = output();
  messageError = signal<string>("");
  messageSucces = signal<string>("");
  puesto: Puesto = { id:0,codigo:'',nombre:''};
  constructor(private puestoService:PuestoService){}

  createPuestoForm: FormGroup = new FormGroup({
    codigo: new FormControl("",[Validators.required]),
    nombre: new FormControl("",[Validators.required])
  })
  get codigo(){
    return this.createPuestoForm.get("codigo")
    }
  get nombre(){
    return this.createPuestoForm.get("nombre")
  }
  guardar() {
    this.messageError.set("")
    if(this.createPuestoForm.invalid){
      this.createPuestoForm.markAllAsTouched();
      return
    }
    this.puesto=this.createPuestoForm.value
    this.puestoService.create(this.puesto).subscribe({
      next:()=>{
        this.messageSucces.set('USUARIO REGISTRADO')
        setTimeout(() => {
          this.guardado.emit();
        }, 800);
      },
      error: (error) => {
        this.messageError.set(error)
      }
      
    })
  }
  cancelarGuardado() {    
    this.cancelar.emit()
  }

}
