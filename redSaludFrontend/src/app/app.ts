import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PublicFooter } from "./core/components/footer/public-footer/public-footer";
import { PublicHeader } from "./core/components/header/public-header/public-header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'redSaludFrontend';
}
