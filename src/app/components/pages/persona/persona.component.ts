import { Component } from '@angular/core';
import { ServiceService } from '../../../services/service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from '../../loading/loading/loading.component';
import { FaultComponent } from '../fault/fault.component';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [HttpClientModule, LoadingComponent, FaultComponent],
  providers: [ServiceService],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  persona?: any;
  loading: boolean = false

  constructor(private route: ActivatedRoute, private service: ServiceService){
    this.getPersona();
  }


  getPersona(){
    const id = Number (this.route.snapshot.paramMap.get("id"));
    this.loading = true;
    this.service.getPersona(id).subscribe({
      next: (data) => {
        this.persona = this.extractEpisodeNumbers(data);
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
      }
    })
  }

  extractEpisodeNumbers(personaData: any): any {

    const modifiedPersona = JSON.parse(JSON.stringify(personaData));


    if (modifiedPersona.episode && Array.isArray(modifiedPersona.episode)) {
      modifiedPersona.episode = modifiedPersona.episode.map((url: string) => {
        return this.extractEpisodeNumberFromUrl(url);
      });
    }

    return modifiedPersona;
  }

  extractEpisodeNumberFromUrl(url: string): string {
    const matches = url.match(/\d+$/);
    return matches ? matches[0] : '';
  }
}
