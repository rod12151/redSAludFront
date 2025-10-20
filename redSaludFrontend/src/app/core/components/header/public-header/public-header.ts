import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faBars, faXmark,faAngleDown }  from  '@fortawesome/free-solid-svg-icons' 
import { AuthService } from '../../../../features/auth/services/auth.service';
@Component({
  selector: 'app-public-header',
  imports: [RouterLinkActive, RouterLink,FontAwesomeModule],
  templateUrl: './public-header.html',
  styleUrl: './public-header.css'
})
export class PublicHeader   {
  private authService = inject(AuthService)
  private route = inject(Router)
  iconMenu=faBars;
  iconClose=faXmark;
  iconSort=faAngleDown

  isOpen = false;
  submenuDependencias=false;

  isLogget=this.authService.isLoggedIn
 
  login(){
    this.route.navigateByUrl('login')
    
  }
  logout() {
    this.authService.onLogout().subscribe({
      next: (response) => {
        if (response) {
          
        } else {
          console.log("errorrrrr" + response)
        }
        console.log(response)
      },
      error: (error) => {
        console.error(error)
      }
    })
  }
}
