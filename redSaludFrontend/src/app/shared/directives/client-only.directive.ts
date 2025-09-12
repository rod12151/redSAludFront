import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[clientOnly]',
  standalone: true
})
export class ClientOnlyDirective {
  constructor(private tpl: TemplateRef<any>, private vcr: ViewContainerRef) {
    if (typeof window !== 'undefined') {
      this.vcr.createEmbeddedView(this.tpl); // Renderiza solo en cliente
    }
  }
}
