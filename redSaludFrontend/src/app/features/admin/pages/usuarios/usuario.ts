import { Component, computed, signal } from "@angular/core";
import { Usuario, UsuarioResponse } from "../../models/UsuarioModel";
import { UsuarioService } from "../../services/usuario-service";
import { CommonModule } from "@angular/common";
import { UsuarioListComponent } from "./usuario-list-component/usuario-list-component";
import { UsuarioCreateComponent } from "./usuario-create-component/usuario-create-component";
import { UsuarioEditComponent } from "./usuario-edit-component/usuario-edit-component";
import { PuestoService } from "../../services/puesto-service";
@Component({
  selector: 'app-usuario-component',
  imports: [CommonModule, UsuarioListComponent, UsuarioCreateComponent, UsuarioEditComponent],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css'
})
export class UsuarioComponent {
  mostrarPanel = signal<boolean>(false)
  usuarioSeleccionado = signal<UsuarioResponse | null>(null);
  modo = signal<'crear' | 'editar'|null>(null);
  constructor(public usuarioService: UsuarioService,public puestoService:PuestoService) {
    this.usuarioService.getAll();
    this.puestoService.getAll()
  }
  nuevoUsuario() {
    this.modo.set('crear');
    this.mostrarPanel.set(true)
  }

  editarUsuario(usuario: UsuarioResponse) {
    this.usuarioSeleccionado.set(usuario);
    this.modo.set('editar');
    this.mostrarPanel.set(true)
  }

  volverLista() {
    this.usuarioSeleccionado.set(null);
    this.modo.set(null)
    this.usuarioService.getAll();
    this.mostrarPanel.set(false)    

  }
  noCambios(){
    this.modo.set(null)
    this.mostrarPanel.set(false)
  }

}