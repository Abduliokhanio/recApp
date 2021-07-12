import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  txt = ''
  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  updateText(txt: string){

    let newRec = new Recipe(txt, "some new Des", "some new img")

    this.data.updateData(newRec);
    
    (<HTMLInputElement>document.getElementById("txt2")).value = "";
    
  }

}
