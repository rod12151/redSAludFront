import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServices {
  
  private apiUrl = 'http://localhost:8080/api/registros/upload'; // Ajusta tu URL del backend
  constructor(private http: HttpClient) {}

  uploadExcel(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(this.apiUrl, formData, {
      responseType: 'text'  // como tu backend devuelve un String
    });
  }
  

  prueba(){
    return this.http.get<any>('http://localhost:8080/api/registros/prueba')
    
  }
}
