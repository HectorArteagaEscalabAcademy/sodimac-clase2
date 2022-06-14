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

@NgModule({
  declarations: [
    CardComponent,
    ViewGameComponent,
    ViewDetailComponent,
    GamesComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule
  ],
  providers:[
    DatePipe,
    GamesService
  ]
})
export class GamesModule { }
