import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './practica/components/games/games.component';
import { HomeComponent } from './practica/components/home/home.component';
import { ConsoleComponent } from './practica/components/console/console.component';
import { DetailGameComponent } from './practica/components/detail-game/detail-game.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'games', component: GamesComponent},
  {path: 'games/:id', component: DetailGameComponent },
  {path: 'console', component: ConsoleComponent },
  {path: 'auth', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
