import { Component, inject, input, OnInit, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../../features/auth/services/auth.service';
@Component({
  selector: 'app-header-admin',
  imports: [FontAwesomeModule],
  templateUrl: './header-admin.html',
  styleUrl: './header-admin.css'
})
export class HeaderAdmin implements OnInit {
  private authService = inject(AuthService)
  menuIcon = faCompass;
  toggleSidebar = output<void>();
  isSidebarCollapsed = input<boolean>(false);
  user: string = ''
  ngOnInit(): void {
    this.user = this.authService.getUser() || ''
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
