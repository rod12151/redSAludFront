import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { IMAGE_CONFIG } from '@angular/common';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './core/interceptor/token-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch(),withInterceptors([tokenInterceptor])),
    
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes,
      
    ), provideClientHydration(withEventReplay()),
    {
    provide: IMAGE_CONFIG,
    useValue: {
      disableImageSizeWarning: true, 
      disableImageLazyLoadWarning: true
    }
  }
  ]
};
