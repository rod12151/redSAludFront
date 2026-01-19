import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filtroBusquedaIndicadores, IndicadoresResponse } from '../../shared/models/datagrafico';



@Injectable({
  providedIn: 'root'
})
export class indicadoresService {
   private apiUrl = 'https://api.sumaqwayra.com/api';
   constructor(private http: HttpClient) {}


  getIndicadores(): Observable<IndicadoresResponse> {
    return this.http.get<IndicadoresResponse>("https://api.sumaqwayra.com/api/registros/grafico?red=HUAMANGA&anio=2023&mes=5.0&microRed=VINCHOS&ipress=ARIZONA");
  }

  getData(filtro:filtroBusquedaIndicadores){
    return this.http.get<IndicadoresResponse>(`${this.apiUrl}/registros/grafico?red=${filtro.red}&anio=${filtro.anio}&mes=${filtro.mes}&microRed=${filtro.microred}&ipress=${filtro.ipress}`)
  }

  downloadExcel(filtro:filtroBusquedaIndicadores) {
  this.http.get(`https://api.sumaqwayra.com/api/reportes/excel?red=${filtro.red}&anio=${filtro.anio}&mes=${filtro.mes}&microRed=${filtro.microred}&ipress=${filtro.ipress}`, {
    responseType: 'blob'
  }).subscribe((res: Blob) => {
    const url = window.URL.createObjectURL(res);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'grafico.xlsx';
    a.click();
    window.URL.revokeObjectURL(url);
  });
}




}
  

