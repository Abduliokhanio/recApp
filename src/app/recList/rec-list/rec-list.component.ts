import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-rec-list',
  templateUrl: './rec-list.component.html',
  styleUrls: ['./rec-list.component.css']
})
export class RecListComponent implements OnInit {
  text = ""
  constructor(private data: DataService) { }

  recList: Recipe[] = [new Recipe("onion", "veggi from ground", "some img"), new Recipe("banana", "fruit", "some img"), new Recipe("juice", "liquid", "some img")]

  ngOnInit(): void {
    this.data.share.subscribe(x => this.recList.push(x))
  }

}
