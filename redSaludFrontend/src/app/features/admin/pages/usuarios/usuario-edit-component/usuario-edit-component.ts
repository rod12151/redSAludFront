import { Component, EventEmitter, Input, OnChanges, OnInit, Output, signal, SimpleChanges } from '@angular/core';
import { rol, Usuario, UsuarioResponse } from '../../../models/UsuarioModel';
import { UsuarioService } from '../../../services/usuario-service';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-edit-component',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './usuario-edit-component.html',
  styleUrl: './usuario-edit-component.css'
})
export class UsuarioEditComponent implements OnChanges {
  @Input() usuario!: UsuarioResponse;
  @Output() cancelar = new EventEmitter<void>();
  @Output() actualizado = new EventEmitter<void>();
  updateUserForm!: FormGroup;

  
  messageError = signal<string>("");
  messageSucces = signal<string>("");
  
  constructor(private usuarioService: UsuarioService) {

  }
ngOnChanges(changes: SimpleChanges): void {
  if(changes['usuario']&& this.usuario){
    this.initForm();
  }  
}

private initForm(){
this.updateUserForm = new FormGroup({
    dni: new FormControl(this.usuario.dni||'', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    name: new FormControl(this.usuario.name||'', [Validators.required]),
    lastName: new FormControl(this.usuario.lastName||''),
    username: new FormControl(this.usuario.username||'', [Validators.required, Validators.email]),
    idPuesto: new FormControl(this.usuario.puesto.id||'', [Validators.required]),
    idRole: new FormControl(this.usuario.roles[0].id||'',[Validators.required])
  })
}
  

  
  get dni() {
    return this.updateUserForm.get('dni')!
  }
  get name() {
    return this.updateUserForm.get('name')!
  }
  get lastName() {
    return this.updateUserForm.get('lastName')!
  }
  get username() {
    return this.updateUserForm.get('username')!
  }
  get idPuesto() {
    return this.updateUserForm.get('idPuesto')!
  }
  get idRole() {
    return this.updateUserForm.get('idRole')!
  }

  actualizar() {
    console.log(this.usuario)
    const usuarioUpdate:Usuario={
      dni:this.usuario.dni,
      email:this.usuario.username,
      name:this.usuario.name,
      lastName:this.usuario.lastName,
      idPuesto:this.usuario.puesto.id,
      idRole:this.usuario.roles[0].id

    }
    console.log(usuarioUpdate)
    this.usuarioService.update(this.usuario.id!, usuarioUpdate).subscribe(() => {
      this.actualizado.emit();
    });
  }
  saveUser(){

  }

}
