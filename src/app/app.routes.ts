import { Routes } from '@angular/router';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MainComponent } from './components/main/main.component';
import { EpisodeComponent } from './components/pages/episode/episode.component';
import { PersonaComponent } from './components/pages/persona/persona.component';
import { PilotoComponent } from './components/pages/piloto/piloto.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
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
  {
    path: '',
    component: MainComponent,
    children: [
      {
        'path': 'character/:id',
        component: PersonaComponent
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
        'path': 'episodes',
        component: EpisodeComponent
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
        'path': 'episodes/:id',
        component: PilotoComponent
      },
        {
    'path': 'main',
    component: MainComponent
  },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

];
