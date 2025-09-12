import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IndicadoresResponse } from '../../shared/models/datagrafico';



@Injectable({
  providedIn: 'root'
})
export class indicadoresService {
   private apiUrl = '/data/indicadores.json';
   constructor(private http: HttpClient) {}

  getIndicadores(): Observable<IndicadoresResponse> {
    return this.http.get<IndicadoresResponse>(this.apiUrl);
  }
}
  

