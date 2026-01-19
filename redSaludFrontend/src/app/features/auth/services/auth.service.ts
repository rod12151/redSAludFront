import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { LoginRequest, rolesResponse, TokenResponse } from '../models/auth';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly plataformId = inject(PLATFORM_ID)
  private readonly http = inject(HttpClient)
  private readonly route = inject(Router)
  private authUrl: String = 'https://api.sumaqwayra.com/api/auth'
  //private authUrl: String = 'http://backend:8080/api/auth'

  //signals para estados reactivos
  private readonly tokenSignal = signal<string | null>(null);
  private readonly userSignal = signal<string | null>(null);
  private readonly rolesSignal = signal<rolesResponse>({
    superAdmin: false,
    admin: false,
    user: false,
    invited: false
  });
  private readonly refreshTokenSignal = signal<string | null>(null);

  //Computed signals para lógica derivada
  readonly isLoggedIn = computed(() => {
    const token = this.tokenSignal();
    return !!token && token.length > 0;
  })

  readonly curretUser = computed(() => this.userSignal());
  readonly curretRoles = computed(() => this.rolesSignal());

  constructor() {
    this.initializeFromStorage();
  }

  /**
 * Inicializa los signals desde localStorage (solo en el browser)
 */
  private initializeFromStorage(): void {
    if (isPlatformBrowser(this.plataformId)) {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      const roles = localStorage.getItem('roles');
      const refreshToken = localStorage.getItem('refreshToken');

      if (token) this.tokenSignal.set(token);
      if (refreshToken) this.refreshTokenSignal.set(refreshToken);
      if (user) this.userSignal.set(user);
      if (roles)  this.rolesSignal.set(JSON.parse(roles));

    }
  }
  /***llamada al backend para login */
  onLogin(credencials: LoginRequest): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.authUrl}/login`, credencials).pipe(
      tap((tokenResponse: TokenResponse) => {
        if (tokenResponse) {
          this.loginUser(tokenResponse)
        }
      }),
      catchError(this.handleError)
    );
  }
 
  /**
   * refresca el token de acceso usando el refreshtoken
   */
  refreshAccessToken(): Observable<TokenResponse> {
    
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      
      this.route.navigateByUrl('')
      return throwError(() => 'no hay refresh token disponible');
    }
    return this.http.post<TokenResponse>(`${this.authUrl}/refresh-token`, { refreshToken }).pipe(
      tap((jwt:TokenResponse) => {
       this.loginUser(jwt)
      }),
      catchError(error=>{
        this.logout();

        return this.handleError(error)
      })
    )
  }
   /**
     * Guarda el token y actualiza el signal
     */
  loginUser(jwt: TokenResponse): void {
    
    if (isPlatformBrowser(this.plataformId)) {
      const roles:rolesResponse=this.buildRoles(jwt.accessToken)
      localStorage.setItem('token', jwt.accessToken);
      localStorage.setItem('refreshToken', jwt.refreshToken);
      this.tokenSignal.set(jwt.accessToken);
      this.refreshTokenSignal.set(jwt.refreshToken);
      this.setUser(jwt.username);
      localStorage.setItem('roles', JSON.stringify(roles));
      console.log("antes")
      console.log(this.rolesSignal())
      this.rolesSignal.set(roles);
      console.log("despues")
      console.log(this.rolesSignal())

    }
  }

  

  /**
   * Cierra sesión y limpia el estado
   */
onLogout():Observable<any>{
  const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      
      this.route.navigateByUrl('/')
      return throwError(() => 'no hay refresh token disponible');
      
    }
    return this.http.post<any>(`${this.authUrl}/logout`,{refreshToken}).pipe(
      tap(response=>{
        console.log(response)
        this.logout()
      })
    )
}

  logout(): boolean {
    if (isPlatformBrowser(this.plataformId)) {
      localStorage.clear();

      this.tokenSignal.set(null);
      this.refreshTokenSignal.set(null)
      this.userSignal.set(null);
      this.rolesSignal.set({
    superAdmin: false,
    admin: false,
    user: false,
    invited: false
  });
      this.route.navigateByUrl('/')

      return true;
    }
    return false;
  }

  /**
   * Obtiene el token y refresh token actual actual
   */
  getToken(): string | null {
    if (isPlatformBrowser(this.plataformId)) {
      return this.tokenSignal();
    }
    return null

  }
  getRefreshToken(): string | null {
    
    if (isPlatformBrowser(this.plataformId)) {
      return this.refreshTokenSignal()
    }
    return null
  }

  /**
   * Guarda el usuario y actualiza el signal
   */
  setUser(user: string): void {
    localStorage.setItem('user', user);
    this.userSignal.set(user);
  }

  /**
   * Obtiene el usuario actual
   */
  getUser(): string | null {
    if (isPlatformBrowser(this.plataformId)) {

      return this.userSignal();
    }
    return null
  }


  /**
   * Guarda los roles y actualiza el signal
   */
  setRole(roles: rolesResponse): void {
    if (isPlatformBrowser(this.plataformId)) {
      localStorage.setItem('roles', JSON.stringify(roles));
      this.rolesSignal.set(roles);
    }
  }

  /**
   * Obtiene los roles actuales
   */
  getRole(): rolesResponse  {
    if (isPlatformBrowser(this.plataformId)) {
      return this.rolesSignal();
    }
    console.log("no encontró valores en el get")
    return {
    superAdmin: false,
    admin: false,
    user: false,
    invited: false
  }
  }

  /**
   * Maneja los errores HTTP
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    const message = error.error?.message || 'Ha ocurrido un error';
    console.error(`Error ${error.status}:`, error.error);
    return throwError(() => message);
  }


  //extarer Claims del tokem
  
  private decodeToken(token:string):any{
    if(!token)return null;
    try {
      return jwtDecode(token)
    }catch (error){
      console.error('error al decodificar el token', error)
      return null
    }
  }

  private buildRoles(token:string):rolesResponse{
    const claims = this.decodeToken(token)
    const roles:rolesResponse = {
      admin:claims.ADMIN,
      superAdmin:claims.SUPERADMIN,
      user:claims.USER,
      invited:claims.INVITED}
    return roles
  }

  



}
