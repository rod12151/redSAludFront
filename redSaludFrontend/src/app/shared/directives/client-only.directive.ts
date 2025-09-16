
import { Directive, TemplateRef, ViewContainerRef, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[clientOnly]',
  standalone: true
})
export class ClientOnlyDirective implements OnInit {
  constructor(
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.vcr.createEmbeddedView(this.tpl); // Renderiza solo en cliente
    }
  }
}
