import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicHeader } from '../../components/header/public-header/public-header';
import { PublicFooter } from '../../components/footer/public-footer/public-footer';

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet,PublicFooter,PublicHeader],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.css'
})
export class PublicLayout {

}
