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

  setItem(key: string, value: any): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getItem(key: string): any {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    return null;
  }

  removeItem(key: string): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }

}
