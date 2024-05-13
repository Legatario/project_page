import { SearchComponent } from './../../search/search.component';
import { StateService } from './../../../services/state.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './../../../services/service.service';
import { Component, ElementRef, OnInit, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from '../../loading/loading/loading.component';
import { FaultComponent } from '../fault/fault.component';



@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [HttpClientModule, CommonModule, SearchComponent, RouterLink, LoadingComponent, FaultComponent],
  providers:[ServiceService, StateService],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit{
  data: any[] = [];
  mortyData: any[] = [];
  call: any;
  page: number = 1;
  filterRick: string = '';
  loading: boolean = false;
  searchTerm: string = '';


  constructor(private service: ServiceService, private stateService: StateService, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.getChar();
    this.localSearch();
    this.stateService.currentBethSearch$.subscribe(() => {

    });

    this.call = this.stateService.getBethSearch()

    const rickSectionElement = this.elementRef.nativeElement.querySelector('.rick-section');

    rickSectionElement.addEventListener('scroll', this.onScroll.bind(this));
  }

  getChar(): void {
    this.service.getChar(this.page).subscribe({
      next: (data) => {
        this.data = [...this.data, ...data.results];
        this.page++;
        this.applyFilter(this.filterRick);
        this.loading = false;
      }
    });
  }

  public JerrySearch($event: any):void {
    this.filterRick = $event;
    this.applyFilter($event);
  }

  private applyFilter(filterValue: string): void {
    this.mortyData = this.data.filter((data: any) => {
      return data.name.toLowerCase().includes(filterValue);
    });
  }

  @HostListener('scroll', ['$event'])

  onScroll(event: any): void {
    const element = event.target
    const savedSearchTerm = String(localStorage.getItem('searchTerm'));
    if (
      element.scrollHeight - element.scrollTop <= element.clientHeight
    ) {
      if(!savedSearchTerm){
        this.loading = true
        this.getChar()
      }
    }
  }

  localSearch():void{

    const savedSearchTerm = String(localStorage.getItem('searchTerm'));
    if(savedSearchTerm !== ''){
      this.loading = true
      this.service.getPilotoOfPersona('?name='+savedSearchTerm).subscribe({
        next: (data) => {
          this.mortyData = data.results
          this.loading = false
        },
        error: (error) => {
          console.error('Resultado não encontrado', error);
          this.mortyData = []
          this.loading = false;
        }
      })
    }
  }

}

