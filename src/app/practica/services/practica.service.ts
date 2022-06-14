import { Injectable } from '@angular/core';
import { games } from '@practica/interfaces/games.interface';

@Injectable({
  providedIn: 'root'
})

export class PracticaService {

  private games: games[] = [
    {
      name: "Super Mario Kart",
      description: "Juego de aventuras",
      platform: "Nintendo",
      img: "./assets/img/mariokart.jpg",
      date: "2022-05-10 04:57:49.551"
    },
    {
      name: "Gran turismo",
      description: "Juego de carreras",
      platform: "PlayStation",
      img: "./assets/img/gt.jpg",
      date: "2020-07-15 04:57:49.551"
    },
    {
      name: "GTA",
      description: "Juego de aventuras",
      platform: "Todas las plataformas",
      img: "./assets/img/gta.jpg",
      date: "2018-05-15 04:57:49.551"
    },
    {
      name: "Mortal Kombat",
      description: "Juego de peleas",
      platform: "Todas las plataformas",
      img: "./assets/img/mk.jpg",
      date: "2019-02-01 04:57:49.551"
    },
    {
      name: "Pokemon",
      description: "Juego de estrategia y aventura",
      platform: "Nintendo Switch",
      img: "./assets/img/pokemon.jpg",
      date: "2017-10-03 04:57:49.551"
    }];

  constructor() { }

  public getGame() {
    return this.games;
  }

  public getDetailGame(index: number) {
    return this.games[index];
  }
}
