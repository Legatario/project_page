import { SearchComponent } from './../search/search.component';
import { HeaderComponent } from './../header/header/header.component';
import { MenuComponent } from './../navBar/menu/menu.component';
import { Component} from '@angular/core';
import { HomeComponent } from '../pages/home/home.component';
import { RouterOutlet } from '@angular/router';
import { CharactersComponent } from '../pages/characters/characters.component';
import { PersonaComponent } from '../pages/persona/persona.component';
import { PilotoComponent } from '../pages/piloto/piloto.component';
import { FaultComponent } from '../pages/fault/fault.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MenuComponent, HomeComponent, HeaderComponent, RouterOutlet, CharactersComponent, SearchComponent, PersonaComponent, PilotoComponent, FaultComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {



}
