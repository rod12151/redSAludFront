import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../../features/auth/services/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  
  
  const authService = inject (AuthService)


    const accessToken = authService.getToken();
    console.log(accessToken)
  if(req.url.startsWith("http://localhost:8080/api/auth")){
    return next(req);
  }else{
    const newReq = req.clone({
    setHeaders:{
      Authorization:`Bearer ${accessToken}`
    }
  })
  return next(newReq)
  }
  
  
};
