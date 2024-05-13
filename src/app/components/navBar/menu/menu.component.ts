import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private router: Router){}

  // Limpar o token e o nome do usuário do localStorage
  logout() {
    localStorage.removeItem('UserLogado');

    this.router.navigate(['/login']);
  }

}
