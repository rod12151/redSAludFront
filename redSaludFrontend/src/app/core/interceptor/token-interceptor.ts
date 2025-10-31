import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../../features/auth/services/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const accessToken = authService.getToken();

  // No añadir token en las rutas públicas (login, refresh, register, etc.)
  const isPublic = ['/api/auth', '/api/public'].some(url => req.url.includes(url));
  if (isPublic) return next(req);

  // Si hay token, lo agregamos al header
  const newReq = accessToken
    ? req.clone({
        setHeaders: { Authorization: `Bearer ${accessToken}` }
      })
    : req;

  return next(newReq).pipe(
    catchError((error: HttpErrorResponse) => {
      // Si el token expiró o no es válido
      if (error.status === 403 && authService.getRefreshToken()) {
        // MUY IMPORTANTE → retornar el observable del refresh
        return authService.refreshAccessToken().pipe(
          switchMap((newTokens) => {
            const retryReq = req.clone({
              setHeaders: { Authorization: `Bearer ${newTokens.accessToken}` }
            });
            // Reintentamos la petición original con el nuevo token
            return next(retryReq);
          }),
          catchError((refreshError) => {            
            return throwError(() => refreshError);
          })
        );
      }

      // Si no es un error de autenticación, lo propagamos
      return throwError(() => error);
    })
  );
};
