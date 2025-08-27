import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Dependencia } from '../../shared/models/dependencia';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DependenciaService {
  private http = inject(HttpClient);

  public obtenerDependencias=this.http.get<Dependencia[]>('/data/dependecias.json')
  
  
  
}
