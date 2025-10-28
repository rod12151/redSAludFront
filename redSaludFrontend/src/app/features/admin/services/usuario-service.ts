import { Injectable, signal } from '@angular/core';
import { Usuario, UsuarioResponse } from '../models/UsuarioModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
   private apiUrl = 'http://localhost:8080/api/usuario';
  usuarios = signal<UsuarioResponse[]>([]);

  constructor(private http: HttpClient) {}

  getAll() {
    this.http.get<UsuarioResponse[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.usuarios.set(data);
        console.log(data)
      },
      error: (err) =>{ console.error('Error al cargar usuarios', err)}
    });
  }

  create(usuario: Usuario) {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  update(id: number, usuario: Usuario) {
    return this.http.put<Usuario>(`${this.apiUrl}/${id}`, usuario);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
