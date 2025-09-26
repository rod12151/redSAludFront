import { Component, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-estadistica',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './header-estadistica.html',
  styleUrl: './header-estadistica.css'
})
export class HeaderEstadistica {
  homeIcon=faRightFromBracket;
  toggleSidebar = output<void>();
  isSidebarCollapsed = input<boolean>(false);
}

