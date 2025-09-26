import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardService } from '../../services/dashboard-estadistica-service';
import { HeaderAdmin } from "../../components/header/header-admin/header-admin";
import { SidebarAdmin } from "../../components/sidebar/sidebar-admin/sidebar-admin";
@Component({
  selector: 'app-dashboard-admin-layout',
  imports: [RouterOutlet, HeaderAdmin, SidebarAdmin],
  templateUrl: './dashboard-admin-layout.html',
  styleUrl: './dashboard-admin-layout.css'
})
export class DashboardAdminLayout {
  constructor(public dashboardService: DashboardService) {}
}
