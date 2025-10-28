import { Component, EventEmitter, Output, signal } from '@angular/core';
import { Usuario } from '../../../models/UsuarioModel';
import { UsuarioService } from '../../../services/usuario-service';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { error } from 'node:console';

@Component({
  selector: 'app-usuario-create-component',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './usuario-create-component.html',
  styleUrl: './usuario-create-component.css'
})
export class UsuarioCreateComponent {
  @Output() cancelar = new EventEmitter<void>();
  @Output() guardado = new EventEmitter<void>();

  messageError = signal<string>("");
  messageSucces = signal<string>("");
  usuario: Usuario = { dni: '', name: '', lastName: '', email: '', idPuesto: 0, idRole: 0 };

  constructor(private usuarioService: UsuarioService) { }
  createUserForm: FormGroup = new FormGroup({
    dni: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    name: new FormControl("", [Validators.required]),
    lastName: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email]),
    idPuesto: new FormControl("", [Validators.required]),
    idRole: new FormControl("",[Validators.required])
  })
  get dni() {
    return this.createUserForm.get('dni')!
  }
  get name() {
    return this.createUserForm.get('name')!
  }
  get lastName() {
    return this.createUserForm.get('lastName')!
  }
  get email() {
    return this.createUserForm.get('email')!
  }
  get idPuesto() {
    return this.createUserForm.get('idPuesto')!
  }
  get idRole() {
    return this.createUserForm.get('idRole')!
  }

  saveUser() {
    this.messageError.set("")
    if (this.createUserForm.invalid) {
      this.createUserForm.markAllAsTouched();
      return;
    }
    this.usuario = this.createUserForm.value
    console.log(this.usuario)
    
    this.usuarioService.create(this.usuario).subscribe({
      next: () => {
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

  guardar() {
    this.usuarioService.create(this.usuario).subscribe(() => {
      this.guardado.emit();
    });
  }
}
