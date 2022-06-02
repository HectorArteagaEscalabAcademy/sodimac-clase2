import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-game',
  templateUrl: './detail-game.component.html',
  styleUrls: ['./detail-game.component.css']
})
export class DetailGameComponent implements OnInit {

  private id!:number;

  constructor(private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.getIdDetail();
  }

  private getIdDetail(){
    this.activatedRoute.params.subscribe(({id})=> this.id = id);
  }

}
