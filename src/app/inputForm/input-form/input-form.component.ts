import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

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
    this.data.updateData(txt)
  }

}
