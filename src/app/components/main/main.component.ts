import { SearchComponent } from './../search/search.component';
import { HeaderComponent } from './../header/header/header.component';
import { MenuComponent } from './../navBar/menu/menu.component';
import { Component} from '@angular/core';
import { HomeComponent } from '../pages/home/home.component';
import { RouterOutlet } from '@angular/router';
import { CharactersComponent } from '../pages/characters/characters.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MenuComponent, HomeComponent, HeaderComponent, RouterOutlet, CharactersComponent, SearchComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {



}
