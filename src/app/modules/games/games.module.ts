import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { CardComponent } from './components/card/card.component';
import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { ViewGameComponent } from './components/view-game/view-game.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import { GamesService } from './services/games.service';
import { CreateGameTemplateComponent } from './components/create-game-template/create-game-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateGameReactiveComponent } from './components/create-game-reactive/create-game-reactive.component';

@NgModule({
  declarations: [
    CardComponent,
    ViewGameComponent,
    ViewDetailComponent,
    GamesComponent,
    CreateGameTemplateComponent,
    CreateGameReactiveComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    DatePipe,
    GamesService
  ]
})
export class GamesModule { }
