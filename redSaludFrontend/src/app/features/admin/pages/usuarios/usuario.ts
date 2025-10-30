import { Component, computed, signal } from "@angular/core";
import { Usuario, UsuarioResponse } from "../../models/UsuarioModel";
import { UsuarioService } from "../../services/usuario-service";
import { CommonModule } from "@angular/common";
import { UsuarioListComponent } from "./usuario-list-component/usuario-list-component";
import { UsuarioCreateComponent } from "./usuario-create-component/usuario-create-component";
import { UsuarioEditComponent } from "./usuario-edit-component/usuario-edit-component";
@Component({
  selector: 'app-usuario-component',
  imports: [CommonModule, UsuarioListComponent, UsuarioCreateComponent, UsuarioEditComponent],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css'
})
export class UsuarioComponent {
  modo = signal<'crear' | 'editar'|boolean>(true);
  usuarioSeleccionado = signal<UsuarioResponse | null>(null);
  mostrarPanel = computed(()=>this.modo()!==null)
  

  constructor(public usuarioService: UsuarioService) {
    this.usuarioService.getAll();
  }

  nuevoUsuario() {
    this.modo.set('crear');
    console.log(this.modo())
  }

  editarUsuario(usuario: UsuarioResponse) {
    this.usuarioSeleccionado.set(usuario);
    this.modo.set('editar');
    console.log(this.modo())
  }

  volverLista() {
    this.usuarioSeleccionado.set(null);
    this.modo.set(false)
    this.usuarioService.getAll();
    console.log(this.modo())

  }
  isTrue(){
    if(this.mostrarPanel()){
      return true
    }
    return false
  }

}