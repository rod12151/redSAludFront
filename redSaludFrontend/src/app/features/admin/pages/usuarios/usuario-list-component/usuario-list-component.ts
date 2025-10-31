import { Component, EventEmitter, Output } from '@angular/core';
import { Usuario, UsuarioResponse } from '../../../models/UsuarioModel';
import { UsuarioService } from '../../../services/usuario-service';

@Component({
  selector: 'app-usuario-list-component',
  imports: [],
  templateUrl: './usuario-list-component.html',
  styleUrl: './usuario-list-component.css'
})
export class UsuarioListComponent {
  @Output() editar = new EventEmitter<UsuarioResponse>();
  
  constructor(public usuarioService: UsuarioService) {}

  eliminar(id: number) {
    if (confirm('¿Seguro que deseas eliminar este usuario?')) {
      this.usuarioService.delete(id).subscribe(() => this.usuarioService.getAll());
    }
  }
}
