import { Component, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../../../models/UsuarioModel';
import { UsuarioService } from '../../../services/usuario-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-create-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './usuario-create-component.html',
  styleUrl: './usuario-create-component.css'
})
export class UsuarioCreateComponent {
  @Output() cancelar = new EventEmitter<void>();
  @Output() guardado = new EventEmitter<void>();

  usuario: Usuario = { dni: '', name: '', lastName: '', email: '', idPuesto: 0, idRole: 0 };

  constructor(private usuarioService: UsuarioService) { }

  guardar() {
    this.usuarioService.create(this.usuario).subscribe(() => {
      this.guardado.emit();
    });
  }
}
