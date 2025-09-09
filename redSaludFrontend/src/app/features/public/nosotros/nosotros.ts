import { Component } from '@angular/core'; 
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css'
})
export class Nosotros {

  selectedSection: string = '';
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
       this.selectedSection = sectionId;
       console.log(this.selectedSection)

    }
  }


}
