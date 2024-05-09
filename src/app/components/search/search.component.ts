import { Component, inject, Output, EventEmitter   } from '@angular/core';
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
export class SearchComponent {

  private State = inject(StateService)

  searchTerm: string = '';
  @Output() serchMorty = new EventEmitter<any>();

  onSubmit(event: Event) {
    event.preventDefault();
  }

  public search(e:any):void{

    e.preventDefault();

    const target = e.target as HTMLInputElement;
    const searchValue = target.value;
    this.saveSearch(searchValue);

    this.serchMorty.emit(searchValue)

  }

  saveSearch(searchValue: any){
    this.State.changeBethSearch(searchValue);
  }


}
