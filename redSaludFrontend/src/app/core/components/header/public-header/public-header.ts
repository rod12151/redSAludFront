import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-public-header',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './public-header.html',
  styleUrl: './public-header.css'
})
export class PublicHeader {

  isOpen = false;
  
}
