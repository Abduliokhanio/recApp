import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from './models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  content = new BehaviorSubject<Recipe>(new Recipe("test name", "test desc", "test img")) 
  share = this.content.asObservable()

  constructor() { }

  updateData(txt: Recipe){
    this.content.next(txt)
  }

}
