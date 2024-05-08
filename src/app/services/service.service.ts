import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private charUrl = "https://rickandmortyapi.com/api/character";

  // private episodesUrl = "https://rickandmortyapi.com/api/episode";

  constructor(private http: HttpClient) { }

  getChar(): Observable<any>{
    return this.http.get<any>(this.charUrl)
  }
}
