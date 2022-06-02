import { Component, OnInit } from '@angular/core';
import { games } from 'src/app/interfaces/games.interface';
import { PracticaService } from '../../services/practica.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  public games:games[] = [];

  constructor(private readonly practicaService:PracticaService) { }

  ngOnInit(): void {
    this.getGames();
  }

  private getGames(){
    this.games = this.practicaService.getGame();
  }


}
