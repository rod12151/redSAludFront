import { Component } from '@angular/core';
import { ImageCarrousel } from '../../../../shared/models/images';

@Component({
  selector: 'app-carrousel-home',
  imports: [],
  templateUrl: './carrousel-home.html',
  styleUrl: './carrousel-home.css'
})
export class CarrouselHome {

  images: ImageCarrousel[] = [
    { id: 1, description: "portada1", enlace: "/images/carrousel/portada1.jpg" },
    { id: 2, description: "portada1", enlace: "/images/carrousel/portada2.jpg" },
    { id: 3, description: "portada1", enlace: "/images/carrousel/portada3.jpg" },
    { id: 4, description: "portada1", enlace: "/images/carrousel/portada4.jpg" }

  ];
  
  currentIndex = 0;

  prev() {
    this.currentIndex =
      (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  next() {
    this.currentIndex =
      (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
