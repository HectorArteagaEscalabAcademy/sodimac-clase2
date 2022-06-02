import { Component, Input, OnInit } from '@angular/core';
import { games } from 'src/app/interfaces/games.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() games:games[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.games);
   
  }

}
