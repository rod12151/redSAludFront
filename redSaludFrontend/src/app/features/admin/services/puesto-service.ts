import { Injectable, signal } from '@angular/core';
import { Puesto } from '../models/PuestoModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PuestoService {
  
  private apiUrl = 'http://localhost:8080/api/puesto';
  private puestos = signal<Puesto[]>([]);

  constructor(private http: HttpClient) {}

  getAll() {
    this.http.get<Puesto[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.puestos.set(data);
        console.log(data)
      },
      error: (err) =>{ console.error('Error al cargar puestos', err)}
    });
  }

  create(puesto: Puesto) {
    return this.http.post<Puesto>(this.apiUrl, puesto);
  }

  update(id: number, puesto: Puesto) {
    return this.http.put<Puesto>(`${this.apiUrl}/${id}`, puesto);
  }

  delete(id: number) {
    return this.http.put<void>(`${this.apiUrl}/estado/${id}`,null);
  }
  getpuestos(){
    return this.puestos()
  }
}
