import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  content = new BehaviorSubject<string>("test") 
  share = this.content.asObservable()

  constructor() { }

  updateData(txt: string){
    this.content.next(txt)
  }

}
