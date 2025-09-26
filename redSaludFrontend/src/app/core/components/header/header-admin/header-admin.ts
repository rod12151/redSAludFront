import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header-admin',
  imports: [RouterLink,FontAwesomeModule],
  templateUrl: './header-admin.html',
  styleUrl: './header-admin.css'
})
export class HeaderAdmin {
  menuIcon=faCompass;
  toggleSidebar = output<void>();
  isSidebarCollapsed = input<boolean>(false);

}
