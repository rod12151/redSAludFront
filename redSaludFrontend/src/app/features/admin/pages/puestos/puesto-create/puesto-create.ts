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
    codigo: new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
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
    console.log(this.createPuestoForm.value)
    if(this.createPuestoForm.invalid){
      this.createPuestoForm.markAllAsTouched();
      console.log("algo salio mal enf")
      return
    }
    this.puesto=this.createPuestoForm.value
    console.log(this.puesto)
    this.puestoService.create(this.puesto).subscribe({
      next:()=>{
        this.messageSucces.set('USUARIO REGISTRADO')
        setTimeout(() => {
          this.guardado.emit();
        }, 800);
      },
      error: (error) => {
        this.messageError.set(error)
        console.log(error)
      }
      
    })
  }
  cancelarGuardado() {    
    this.cancelar.emit()
  }

}
