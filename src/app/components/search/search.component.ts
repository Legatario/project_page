import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchTerm: string = ''

  search(e:any):void{

    // const target = e.target as HTMLInputElement;
    // const searchValue = target.value;

  }

}
