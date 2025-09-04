import { Component, Input } from '@angular/core';
import { oficina } from '../../models/dependencia';

@Component({
  selector: 'app-card-oficina',
  imports: [],
  templateUrl: './card-oficina.html',
  styleUrl: './card-oficina.css'
})
export class CardOficina {
  
 @Input() oficina?:oficina

}
