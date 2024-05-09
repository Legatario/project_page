import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {


  private bethSearch = new BehaviorSubject<string>('');
   currentBethSearch$ = this.bethSearch.asObservable();

  constructor() {}

  changeBethSearch(valor: string){
    this.bethSearch.next(valor);
  }

  getBethSearch(){
    return this.currentBethSearch$
  }

}
