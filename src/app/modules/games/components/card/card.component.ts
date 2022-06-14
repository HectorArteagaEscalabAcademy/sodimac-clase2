import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { games } from 'src/app/modules/games/interfaces/games.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() games:games[] = [];
  public state: string = 'estado actual';
  public stateCard: boolean = true;

  constructor(
    private router:Router,
    private datePipe: DatePipe) {}

  ngOnInit(): void {
  }

  public checkElement(index:number){
    this.router.navigate(['/games', index]);
  }

  public addGame(game:games){
    const { date } = game;
    
    const newDate = this.datePipe.transform(date,'EEEE, MMMM d, y');
    console.log(newDate);
  }

  

}
