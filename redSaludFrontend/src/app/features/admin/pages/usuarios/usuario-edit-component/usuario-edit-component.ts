import { Component, EventEmitter, Input, Output } from '@angular/core';
import { rol, Usuario, UsuarioResponse } from '../../../models/UsuarioModel';
import { UsuarioService } from '../../../services/usuario-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-edit-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './usuario-edit-component.html',
  styleUrl: './usuario-edit-component.css'
})
export class UsuarioEditComponent {
  @Input() usuario!: UsuarioResponse;
  @Output() cancelar = new EventEmitter<void>();
  @Output() actualizado = new EventEmitter<void>();

   rolesDisponibles: rol[] = [
    { id: 1, nombre: 'SUPERADMIN' },
    { id: 2, nombre: 'ADMIN' },
    { id: 3, nombre: 'USER' },
    { id: 4, nombre: 'INVITED' }
  ];
  
  constructor(private usuarioService: UsuarioService) {

  }

  actualizar() {
    console.log(this.usuario)
    const usuarioUpdate:Usuario={
      dni:this.usuario.dni,
      email:this.usuario.email,
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
}
