import { SearchComponent } from './../../search/search.component';
import { StateService } from './../../../services/state.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './../../../services/service.service';
import { Component, ElementRef, OnInit, HostListener} from '@angular/core';
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


  constructor(private service: ServiceService, private stateService: StateService, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.getChar();

    this.stateService.currentBethSearch$.subscribe(() => {

    });

    this.call = this.stateService.getBethSearch()
    console.log(this.call)

    const rickSectionElement = this.elementRef.nativeElement.querySelector('.rick-section');

    rickSectionElement.addEventListener('scroll', this.onScroll.bind(this));
  }

  getChar(): void {
    this.service.getChar().subscribe({
      next: (data) =>{
        console.log(data)
        this.data = data.results
        this.mortyData = data.results
      }
    })
  }

  public JerrySearch($event: any):void{

    this.mortyData = this.data.filter((data: any) => {
      return data.name.toLowerCase().includes($event);
    });
    console.log(this.mortyData)
  }

  @HostListener('scroll', ['$event'])

  onScroll(event: any): void {
    const element = event.target
    if (
      element.scrollHeight - element.scrollTop === element.clientHeight
    ) {
      console.log(element.scrollHeight)
    }
  }


}

