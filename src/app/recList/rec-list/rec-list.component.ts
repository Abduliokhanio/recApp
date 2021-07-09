import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-rec-list',
  templateUrl: './rec-list.component.html',
  styleUrls: ['./rec-list.component.css']
})
export class RecListComponent implements OnInit {
  text = ""
  constructor(private data: DataService) { }

  recList = ['onion', 'banana', 'juice']

  ngOnInit(): void {
    this.data.share.subscribe(x => this.recList.push(x))
  }

}
