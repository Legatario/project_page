import { Routes } from '@angular/router';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MainComponent } from './components/main/main.component';


export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        'path': 'home',
        component: HomeComponent
      },
        {
    'path': 'main',
    component: MainComponent
  },
    ]
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        'path': 'character',
        component: CharactersComponent
      },
        {
    'path': 'main',
    component: MainComponent
  },
    ]
  },

];
