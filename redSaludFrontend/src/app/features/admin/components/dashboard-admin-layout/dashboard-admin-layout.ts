import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardService } from '../../../../core/services/dashboard-estadistica-service';
import { HeaderAdmin } from '../header-admin/header-admin';
import { SidebarAdmin } from '../sidebar-admin/sidebar-admin';
@Component({
  selector: 'app-dashboard-admin-layout',
  imports: [RouterOutlet, HeaderAdmin, SidebarAdmin],
  templateUrl: './dashboard-admin-layout.html',
  styleUrl: './dashboard-admin-layout.css'
})
export class DashboardAdminLayout {
  constructor(public dashboardService: DashboardService) {}
}
