import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header-estadistica',
  imports: [],
  templateUrl: './header-estadistica.html',
  styleUrl: './header-estadistica.css'
})
export class HeaderEstadistica {
toggleSidebar = output<void>();
  isSidebarCollapsed = input<boolean>(false);
}
