import { Component, Input } from '@angular/core';
import { Dependencia } from '../../models/dependencia';

@Component({
  selector: 'app-card-primary',
  imports: [],
  templateUrl: './card-primary.html',
  styleUrl: './card-primary.css'
})
export class CardPrimary {
  @Input() dependencia?:Dependencia


}
