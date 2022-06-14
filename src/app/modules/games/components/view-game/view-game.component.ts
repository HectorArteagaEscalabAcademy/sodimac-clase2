import { Component, OnInit } from '@angular/core';
import { games } from 'src/app/modules/games/interfaces/games.interface';
import { GamesService } from 'src/app/modules/games/services/games.service';

@Component({
  selector: 'app-view-game',
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.css']
})
export class ViewGameComponent implements OnInit {

  public games:games[] = [];

  constructor(private readonly gamesService:GamesService) { }

  ngOnInit(): void {
    this.getGames();
    this.getCountriesAll();
  }

  private getGames(){
    this.games = this.gamesService.getGame();
  }

  private getCountriesAll(){
    this.gamesService.getCountriesAll().subscribe(request => console.log(request));
  }

}
