import { isPlatformBrowser } from '@angular/common';
import { computed, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  //Signals para el estado del dashboard
  private _isSidebarCollapsed = signal(false);
  private _screenWidth = signal(this.getInitialScreenWidth());

  // Computed signals
  readonly isSidebarCollapsed = this._isSidebarCollapsed.asReadonly();
  readonly screenWidth = this._screenWidth.asReadonly();
  readonly isMobile = computed(() => this._screenWidth() < 768);

  constructor() {
    if (this.isBrowser) {
      this.handleResize();
      
      // Effect para colapsar automáticamente en móvil
      effect(() => {
        if (this.isMobile()) {
          this._isSidebarCollapsed.set(true);
        }
      });
    }
  }
  private getInitialScreenWidth(): number {
    // Valor por defecto para SSR (escritorio)
    if (!this.isBrowser) {
      return 1024;
    }
    return window.innerWidth;
  }



   private handleResize() {
    if (!this.isBrowser) return;

    const updateScreenWidth = () => {
      this._screenWidth.set(window.innerWidth);
    };

    // Actualizar el ancho inicial
    updateScreenWidth();

    // Escuchar cambios de tamaño
    window.addEventListener('resize', updateScreenWidth);
    
    // La limpieza se maneja automáticamente en Angular
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }

  toggleSidebar() {
    this._isSidebarCollapsed.update(collapsed => !collapsed);
  }

  collapseSidebar() {
    this._isSidebarCollapsed.set(true);
  }

  expandSidebar() {
    this._isSidebarCollapsed.set(false);
  }

  // Método para verificar si estamos en el browser
  get isInBrowser(): boolean {
    return this.isBrowser;
  }
}


