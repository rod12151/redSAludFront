import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderEstadistica } from "../../components/header/header-estadistica/header-estadistica";
import { SidebarEstadistica } from "../../components/sidebar/sidebar-estadistica/sidebar-estadistica";
import { DashboardService } from '../../services/dashboard-estadistica-service';

@Component({
  selector: 'app-dashboard-estadistica-layout',
  imports: [RouterOutlet, HeaderEstadistica, SidebarEstadistica],
  templateUrl: './dashboard-estadistica-layout.html',
  styleUrl: './dashboard-estadistica-layout.css'
})
export class DashboardEstadisticaLayout {

   constructor(public dashboardService: DashboardService) {}
}
