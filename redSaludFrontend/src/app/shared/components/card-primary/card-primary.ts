import { Component, inject, Input } from '@angular/core';
import { Dependencia } from '../../models/dependencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-primary',
  imports: [],
  templateUrl: './card-primary.html',
  styleUrl: './card-primary.css'
})
export class CardPrimary {
 private router=inject(Router)
 @Input() dependencia?:Dependencia

detalleDependencia(id:number){
    if(id!=undefined){
      console.log(`dependencias/${id}`)
      this.router.navigate([`dependencias/${id}`])
      

    }
}
}
