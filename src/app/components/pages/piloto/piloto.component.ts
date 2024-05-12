import { Component } from '@angular/core';
import { ServiceService } from '../../../services/service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-piloto',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  providers: [ServiceService],
  templateUrl: './piloto.component.html',
  styleUrl: './piloto.component.css'
})
export class PilotoComponent {
  piloto?: any;
  benjaminPersonas?: any;
  charOfPilot: any;

  constructor(private route: ActivatedRoute, private service: ServiceService){
    this.getPiloto();
  }


  getPiloto(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.service.getPiloto(id).subscribe({
      next: (data) => {
        this.piloto = data;
        this.benjaminPersonas = this.extractEpisodeNumbers(data);
        this.getPilotoOfPersona(this.benjaminPersonas)
      }
    });
  }

  extractEpisodeNumbers(personaData: any): any {
    // Fazendo uma cópia profunda dos dados
    var modifiedPersona = JSON.parse(JSON.stringify(personaData.characters));

    if (modifiedPersona && Array.isArray(modifiedPersona)) {
      modifiedPersona = modifiedPersona.map((url: string) => {
        return this.extractEpisodeNumberFromUrl(url);
      });
    }

    return modifiedPersona;
  }

  extractEpisodeNumberFromUrl(url: string): string {
    const matches = url.match(/\d+$/);
    return matches ? matches[0] : '';
  }

  getPilotoOfPersona(char: any){
    this.service.getPilotoOfPersona(char).subscribe({
      next: (data) => {
        this.charOfPilot = data
      }
    });
  }
}
