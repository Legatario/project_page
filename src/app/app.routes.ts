import { Routes } from '@angular/router';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { HomeComponent } from './components/pages/home/home.component';


export const routes: Routes = [
  {
    'path': "",
    component: HomeComponent,
  },
  {
    'path': "characters",
    component: CharactersComponent
  }
];
