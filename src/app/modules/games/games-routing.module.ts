import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewGameComponent } from './components/view-game/view-game.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import { GamesComponent } from './games.component';
import { CreateGameTemplateComponent } from './components/create-game-template/create-game-template.component';
import { CreateGameReactiveComponent } from './components/create-game-reactive/create-game-reactive.component';
//import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    children: [
      { path: '', component: ViewGameComponent },
      { path: 'create-game-template', component: CreateGameTemplateComponent },
      { path: 'create-game-reactive', component: CreateGameReactiveComponent },
      { path: ':id', component: ViewDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
