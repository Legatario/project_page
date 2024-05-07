import { MenuComponent } from './../navBar/menu/menu.component';
import { HeaderComponent } from './../header/header/header.component';
import { Component } from '@angular/core';
import { HomeComponent } from '../pages/home/home.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, HomeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
