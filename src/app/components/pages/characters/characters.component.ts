import { SearchComponent } from './../../search/search.component';
import { StateService } from './../../../services/state.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './../../../services/service.service';
import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [HttpClientModule, CommonModule, SearchComponent],
  providers:[ServiceService, StateService],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit{
  data: any;
  mortyData: any;
  call: any;


  constructor(private service: ServiceService, private stateService: StateService) {}

  ngOnInit(): void {
    this.getChar();

    this.stateService.currentBethSearch$.subscribe(() => {

    });

    this.call = this.stateService.getBethSearch()
    console.log(1)
    console.log(this.call)
  }

  getChar(): void {
    this.service.getChar().subscribe({
      next: (data) =>{
        this.data = data.results
        this.mortyData = data.results
        console.log(this.data)
      }
    })
  }

  public JerrySearch($event: any):void{

    this.mortyData = this.data.filter((data: any) => {
      return data.name.toLowerCase().includes($event);
    });
    console.log(this.mortyData)
  }


}

