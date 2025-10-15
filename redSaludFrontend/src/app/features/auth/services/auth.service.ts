import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { LoginRequest, TokenResponse } from '../models/auth';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly plataformId = inject(PLATFORM_ID)
  private readonly http = inject(HttpClient)
  private authUrl:String='http://localhost:8080/api/auth'

  //signals para estados reactivos
  private readonly tokenSignal = signal<string | null >(null);
  private readonly userSignal = signal<string | null >(null);
  private readonly rolesSignal = signal<string | null >(null);

  //Computed signals para lógica derivada
  readonly isLoggedIn = computed(()=>{
    const token = this.tokenSignal();
    return !!token && token.length > 0;
  })

  readonly curretUser = computed(() => this.userSignal());
  readonly curretRoles = computed(()=> this.rolesSignal());
  constructor(){
    this.initializeFromStorage();
  }

    /**
   * Inicializa los signals desde localStorage (solo en el browser)
   */
  private initializeFromStorage(): void {
    if (isPlatformBrowser(this.plataformId)) {
      const token = localStorage.getItem('token');
      const userStr = localStorage.getItem('user');
      const rolesStr = localStorage.getItem('roles');

      if (token) this.tokenSignal.set(token);
      if (userStr) {
        try {
          this.userSignal.set(JSON.parse(userStr));
        } catch (error) {
          console.error('Error parsing user from localStorage', error);
        }
      }
      if (rolesStr) {
        try {
          this.rolesSignal.set(JSON.parse(rolesStr));
        } catch (error) {
          console.error('Error parsing roles from localStorage', error);
        }
      }
    }
  }



  onLogin(credencials:LoginRequest):Observable<TokenResponse>{
    return this.http.post<TokenResponse>(`${this.authUrl}/login`,credencials).pipe(
      tap((tokenResponse:TokenResponse)=>{
        if(tokenResponse.accessToken){
          this.loginUser(tokenResponse.accessToken)
        }
      }),
      catchError(this.handleError)
    );
}
/**
   * Guarda el token y actualiza el signal
   */
  loginUser(token: string): void {
    if (isPlatformBrowser(this.plataformId)) {
      localStorage.setItem('token', token);
      this.tokenSignal.set(token);
    }
  }

  /**
   * Cierra sesión y limpia el estado
   */
  logout(): boolean {
    if (isPlatformBrowser(this.plataformId)) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('roles');
      
      this.tokenSignal.set(null);
      this.userSignal.set(null);
      this.rolesSignal.set(null);
      
      return true;
    }
    return false;
  }

  /**
   * Obtiene el token actual
   */
  getToken(): string | null {
    return this.tokenSignal();
  }

  /**
   * Guarda el usuario y actualiza el signal
   */
  setUser(user: string): void {
    if (isPlatformBrowser(this.plataformId)) {
      localStorage.setItem('user',user);
      this.userSignal.set(user);
    }
  }

  /**
   * Obtiene el usuario actual
   */
  getUser(): string | null {
    return this.userSignal();
  }

  /**
   * Actualiza el usuario actual
   */
  setCurrentUser(user: string | null): void {
    if (user) {
      console.log('Usuario actualizado:', user);
      this.setUser(user);
    }
  }
  /**
   * Guarda los roles y actualiza el signal
   */
  setRole(roles: string): void {
    if (isPlatformBrowser(this.plataformId)) {
      localStorage.setItem('roles', roles);
      this.rolesSignal.set(roles);
    }
  }

  /**
   * Obtiene los roles actuales
   */
  getRole(): string | null {
    return this.rolesSignal();
  }

  /**
   * Maneja los errores HTTP
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      console.error('Se ha producido un error de red:', error.error);
    } else {
      console.error(
        `Backend retornó el código de estado ${error.status}:`,
        error.error
      );
    }
    const errorMessage = error.error?.message || 'Ha ocurrido un error';
    return throwError(() => errorMessage);
  }



}
