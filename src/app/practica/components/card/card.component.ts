import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { games } from 'src/app/interfaces/games.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() games:games[] = [];
  public state: string = 'estado actual';
  public stateCard: boolean = true;

  constructor(private router:Router) {}

  ngOnInit(): void {
  }

  public checkElement(index:number){
    this.router.navigate(['/games', index]);
  }

}
