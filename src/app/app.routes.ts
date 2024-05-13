import { Routes } from '@angular/router';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MainComponent } from './components/main/main.component';
import { EpisodeComponent } from './components/pages/episode/episode.component';
import { PersonaComponent } from './components/pages/persona/persona.component';
import { PilotoComponent } from './components/pages/piloto/piloto.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { FaultComponent } from './components/pages/fault/fault.component';
import { authGuard } from './guard/auth.guard';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: RegisterComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        'path': 'home',
        component: HomeComponent,
        canActivate: [authGuard],
      },
        {
    'path': 'main',
    component: MainComponent,
    canActivate: [authGuard],
  }

    ]
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        'path': 'character',
        component: CharactersComponent,
        canActivate: [authGuard],
      },
        {
    'path': 'main',
    component: MainComponent,
    canActivate: [authGuard],
  },
    ]
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        'path': 'character/:id',
        component: PersonaComponent,
        canActivate: [authGuard],
      },
        {
    'path': 'main',
    component: MainComponent,
    canActivate: [authGuard],
  },
    ]
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        'path': 'episodes',
        component: EpisodeComponent,
        canActivate: [authGuard],
      },
        {
    'path': 'main',
    component: MainComponent,
    canActivate: [authGuard],
  },
    ]
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        'path': 'episodes/:id',
        component: PilotoComponent,
        canActivate: [authGuard],
      },
        {
    'path': 'main',
    component: MainComponent,
    canActivate: [authGuard],
  },
    ]
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        'path': '**',
        component: FaultComponent,
        canActivate: [authGuard],
      },
        {
    'path': 'main',
    component: MainComponent,
    canActivate: [authGuard],
  },
    ]
  },

];
