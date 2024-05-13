import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { StateService } from '../../../services/state.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  userOfRick: string = 'Rick & Morty'

  constructor(private localStorage: StateService){

  }

  ngOnInit(): void {
    this.getUserLogado()
  }

  getUserLogado():void{
    const item = this.localStorage.getItem('UserLogado');
    if(item && item.nome){
      this.userOfRick = item.nome.indexOf(" ") == -1 ? item.nome : item.nome.substring(0, item.nome.indexOf(" "))
    }else {
      this.userOfRick = 'Rick & Morty';
    }
  }
}
