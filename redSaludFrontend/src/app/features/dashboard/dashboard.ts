import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  stats = signal([
    { title: 'Usuarios', value: 1200 },
    { title: 'Ventas', value: 540 },
    { title: 'Ganancias', value: '$12,300' }
  ]);

}
