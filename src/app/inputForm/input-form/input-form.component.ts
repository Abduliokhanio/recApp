import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  rNametxt = ''
  rNameDesc = ''
  rNameImg = ''
  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  updateText(rName: string, rDesc: string, imgI: string){

    let newRec = new Recipe(rName, rDesc, imgI)

    this.data.updateData(newRec);
    
    (<HTMLInputElement>document.getElementById("rname")).value = "";
    
  }

}
