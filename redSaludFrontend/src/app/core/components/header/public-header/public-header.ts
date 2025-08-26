import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faBars, faXmark,faAngleDown }  from  '@fortawesome/free-solid-svg-icons' 
@Component({
  selector: 'app-public-header',
  imports: [RouterLinkActive, RouterLink,FontAwesomeModule],
  templateUrl: './public-header.html',
  styleUrl: './public-header.css'
})
export class PublicHeader {
  iconMenu=faBars;
  iconClose=faXmark;
  iconSort=faAngleDown

  isOpen = false;
  submenuDependencias=false;
  
}
