import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './../../../services/service.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [HttpClientModule],
  providers:[ServiceService],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
  data: any

  constructor(private service: ServiceService){
    this.getChar()
  }

  getChar(): void {
    this.service.getChar().subscribe({
      next: (data) =>{
        this.data = data.results
        console.log(this.data)
      }
    })
  }

  @Input() searchTerm?: string;

}

