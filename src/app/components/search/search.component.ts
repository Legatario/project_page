import { Component, inject, Output, EventEmitter, OnInit   } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { StateService } from '../../services/state.service';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatIconModule],
  providers:[StateService],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {



  searchTerm: string = '';
  @Output() serchMorty = new EventEmitter<any>();

  constructor(private State: StateService) {}

  ngOnInit(): void {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      this.searchTerm = savedSearchTerm;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
  }

  public search(event: any): void {
    event.preventDefault();

    const target = event.target as HTMLInputElement;
    const searchValue = target.value.toLowerCase();
    this.searchTerm = searchValue;

    localStorage.setItem('searchTerm', searchValue);

    this.serchMorty.emit(searchValue);
  }

}
