import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginRequest, TokenResponse } from '../models/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  /**uploadExcel(file: File): Observable<any> {
      const formData = new FormData();
      formData.append('file', file);
  
      return this.http.post(this.apiUrl, formData, {
        responseType: 'text'  // como tu backend devuelve un String
      });
    } */
  
  onLogin(credencials:LoginRequest):Observable<TokenResponse>{
    return this.http.post<TokenResponse>('',credencials)
  }
}
