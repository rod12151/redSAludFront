import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {

  cards = signal([
    { id: 1, title: 'Card 1', desc: 'Descripción 1' },
    { id: 2, title: 'Card 2', desc: 'Descripción 2' },
    { id: 3, title: 'Card 3', desc: 'Descripción 3' }
  ]);

  activeId = signal<number | null>(null);

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.activeId.set(params['id'] ? Number(params['id']) : null);
    });
  }
}
