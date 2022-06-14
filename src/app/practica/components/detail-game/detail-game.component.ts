import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { games } from '@practica/interfaces/games.interface';
import { PracticaService } from '@practica/services/practica.service';
 
@Component({
  selector: 'app-detail-game',
  templateUrl: './detail-game.component.html',
  styleUrls: ['./detail-game.component.css']
})
export class DetailGameComponent implements OnInit {

  private id!:number;
  //public game:games = {platform: "", description: "", img: "", name: ""};
  public game!:games;

  constructor(
    private activatedRoute:ActivatedRoute,
    private practicaService:PracticaService) {

    }

  ngOnInit(): void {
    this.getIdDetail();
    this.getDetailGame();
  }

  private getIdDetail(){
    this.activatedRoute.params.subscribe(({id})=> this.id = id);
  }

  private getDetailGame(){
   this.game = this.practicaService.getDetailGame(this.id);
  }


}
