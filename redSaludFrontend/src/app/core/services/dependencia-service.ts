import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { dependencia } from '../../shared/models/dependencia';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DependenciaService {
  private http = inject(HttpClient);

  public obtenerDependencias=this.http.get<dependencia[]>('/data/dependecias.json')
  
  
  
}
