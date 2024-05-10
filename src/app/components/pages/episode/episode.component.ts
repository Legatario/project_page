import { ServiceService } from './../../../services/service.service';
import { Component } from '@angular/core';
import { SearchComponent } from '../../search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [HttpClientModule ,SearchComponent, RouterLink],
  providers:[ServiceService],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.css'
})
export class EpisodeComponent {

  currentPage: number = 1;
  epiDate: any[] = [];
  SummerEpi: any

  constructor(private service: ServiceService){
    this.getEpisodes();
  }

  public JerrySearch($event: any):void{
    this.SummerEpi = this.epiDate.filter((data : any) =>{
      return data.name.toLowerCase().includes($event) || data.episode.toLowerCase().includes($event);
    });
  }

  // this.mortyData = this.data.filter((data: any) => {
  //   return data.name.toLowerCase().includes($event);
  // });

  getEpisodes(): void {


    this.service.getEpisodes(this.currentPage).subscribe({
      next: (data) => {
        this.epiDate.push(...data.results);
        if (data.info.next) {

          this.currentPage++;
          this.getEpisodes();
        } else {
          this.SummerEpi = this.epiDate;
          console.log(this.epiDate);
        }
      },
      error: (error) => {
        console.error('Erro ao obter episódios:', error);
      }
    });
  }
}
