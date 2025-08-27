import { Component, Input } from '@angular/core';
import { Dependencia } from '../../../../shared/models/dependencia';

@Component({
  selector: 'app-dependecias-home',
  imports: [],
  templateUrl: './dependecias-home.html',
  styleUrl: './dependecias.css'
})
export class DependeciasHome {
  @Input() dependencias?:Dependencia[]
 
    isPar(number:number){
      if(number%2==0){
        return true
      }
      return false
    }

}
